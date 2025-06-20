import {FC, useState, useEffect} from 'react'
import {Model, Collection} from '../../core/_models'
import {Button, Col, Form, Row, Spinner} from 'react-bootstrap'
import {useNavigate} from 'react-router'
import {useSnackbar} from 'notistack'
import {RoleRequest} from '../../../../models/roles'
import {SubmitHandler, useForm, SubmitErrorHandler} from 'react-hook-form'
import {update} from '../../core/_requests'
import { MappingPrivilege } from '../../../../models/privileges'
import { useParams } from 'react-router'
import { useGetPrivileges } from '../../hooks/useGetPrivileges'


type props = {
  data: RoleRequest
}

const EditPage: FC<props> = ({data}) => {
  const params = useParams();
  const { id } = params;
  const [_, setChecklist] = useState<Array<MappingPrivilege>>([]);
  const [privilegeOptions, setPrivilegeOptions] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(false)

  const { formattedPrivileges } = useGetPrivileges();

  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<RoleRequest>({defaultValues: data})

  useEffect(() => {
    async function getFetchPrivilege() {
      const response = await formattedPrivileges();
      const {data} = response?.data;
      if (data) {
        setChecklist(data);
        const privilegeOptionsMapping = Object.values(data as object).map((entries) => {
          const { name, mapping } = entries;
          return {
            name,
            mapping: Object.values(mapping as object).map((entry) => {
              const { action, uri, method } = entry;
              return {
                label: action,
                value: uri.concat("|", method),
              };
            }),
          };
        });

        setPrivilegeOptions(privilegeOptionsMapping)
      }
    }

    getFetchPrivilege();
    
    setValue('name', data.name);
    setValue('privilege', data.privilege);
    
  }, [data, formattedPrivileges, setValue])


  const onError: SubmitErrorHandler<RoleRequest> = (errors) => {
    // collection of form error
    // example: console.log('ERROR:', errors.submodule)
    console.error(errors)
  }

  const onSubmit: SubmitHandler<Model> = async (data: RoleRequest) => {
    const name = data.name;
    let {privilege} = data;
    if(!privilege){
      privilege =[];
    }
    if(!Array.isArray(privilege) && privilege){
        privilege = [privilege];
    }

    const privileges = (privilege as string[])?.map((entry) => {
      const splitValue = entry.split("|");
      const [uri, method] = splitValue;
      return {
        uri,
        method
      }
    });

    const result = {
      name,
      privileges
    }

    try {
      setIsLoading(true)
      await update(`${Collection}`, id, result).then((response) => {
        const {data} = response
        if (data) {
          enqueueSnackbar('Role Updated', {
            variant: 'success',
          })
        }
        navigate(`/${Collection}`)
      })
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  const backButton = () => {
    navigate(`/${Collection}`)
  }

  return (
    <>
      <div className='card card-custom'>
        <div className='card-header'>
          <h3 className='card-title'>Edit Role</h3>
        </div>
        <div className='card-body'>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className='mb-4'>
              <Form.Label>Role Name</Form.Label>
              <Form.Control type='text' {...register('name', {required: 'This is required'})} />
              <span className='text-danger pt-4'>{errors.name?.message}</span>
            </Form.Group>
            <Form.Group className='mb-4'>
              <Row>
                {privilegeOptions.map((entry, index) => {
                  const {name, mapping} = entry;
                  return (
                    <Col lg={4} className={'mb-5'} key={index}>
                      <Row className={'align-items-start'}>
                        <Col lg={12} className={'font-weight-bold mb-5'}>{name}</Col>
                        <Col lg={12}>
                          {mapping.map((data: any, index: any) => {
                            const {label, value} = data;
                            return (
                              <Form.Check 
                                {...register('privilege')}
                                type={'checkbox'}
                                label={label}
                                value={value}
                                className={'mb-5'}
                                key={index}
                              />
                            )
                          })}
                        </Col>
                      </Row>
                    </Col>
                  )
                })}
              </Row>
            </Form.Group>
            <Form.Group className='mb-4 d-flex justify-content-between'>
              <Button variant='secondary' onClick={backButton}>
                Back
              </Button>
              <Button variant='primary' className='ms-4' type='submit' disabled={isLoading}>
                <i className="bi bi-check-lg"></i>  Update{' '}
                {isLoading && (
                  <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                )}
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EditPage
