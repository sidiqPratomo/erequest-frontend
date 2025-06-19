import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CreateModel } from "../../core/_models";
import {
  DatePicker,
  MultiUploadWithList,
  SingleSelect,
} from "../../../../components";
import { SelectOption } from "../../../../base_models";
import { useAllEmployees } from "../../query/useAllEmployees";

interface Props {
  collection: string;
  readOnly?: boolean;
}

export const CreateForm: FC<Props> = ({ collection, readOnly = false }) => {
  const {
    formState: { errors },
    control,
  } = useFormContext<CreateModel>();

  const { data: dataUser } = useAllEmployees();

  return (
    <>
      <Controller
        name="employee_id"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Name is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <SingleSelect
            label="user"
            options={
              dataUser?.map((user) => ({
                label: user.user.first_name,
                value: user.id as unknown as string,
              })) ?? []
            }
            isRequired={true}
            value={value}
            changeHandler={(val: SelectOption | null) => {
              if (val) {
                onChange(val.value);
              }
            }}
            errorsMessage={errors.employee_id}
          />
        )}
      />

      <Controller
        name="files"
        control={control}
        rules={{
          required: {
            value: true,
            message: "files is required",
          },
        }}
        render={({ field: { onChange, value } }) => {
          const parseValue = value ? JSON.parse(value) : [];
          return (
            <MultiUploadWithList
              label="file"
              bucket="leaves"
              path="files"
              initialFiles={parseValue}
              onFileChange={(files) => {
                onChange(files);
              }}
            />
          );
        }}
      />

      <Controller
        name="leave_date"
        control={control}
        rules={{
          required: {
            value: true,
            message: "leave_date of Birth is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            isRequired
            label="leave_date"
            value={value || ""}
            errorsMessage={errors.leave_date}
            options={{
              altInput: true,
              altFormat: "j F, Y",
              dateFormat: "Y-m-d",
            }}
            onChange={(date) => {
              onChange(date);
            }}
          />
        )}
      />

      <Controller
        name="return_date"
        control={control}
        rules={{
          required: {
            value: true,
            message: "return_date of Birth is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            isRequired
            label="return_date"
            value={value || ""}
            errorsMessage={errors.return_date}
            options={{
              altInput: true,
              altFormat: "j F, Y",
              dateFormat: "Y-m-d",
            }}
            onChange={(date) => {
              onChange(date);
            }}
          />
        )}
      />
    </>
  );
};
