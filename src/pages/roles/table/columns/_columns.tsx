import {Column} from 'react-table'
import {SelectionHeader} from './SelectionHeader'
import {SelectionCell} from './SelectionCell'
import {CustomHeader} from './CustomHeader'
import {ColumnString} from '../../../../components/table/column/ColumnString'
import {ActionsCell} from './ActionsCell'

const usersColumns: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <SelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title='Role Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => {
      const entry = props.data[props.row.index]
      return <ColumnString value={entry['name']} />
    },
  },
  {
    Header: (props) => (
      <CustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
