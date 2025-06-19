import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ReadModel } from "../../core/_models";
import {
  DatePicker,
  MultiUploadWithList,
  TranslatedInputText,
} from "../../../../components";

interface Props {
  collection: string;
  readOnly?: boolean;
}

export const ReadForm: FC<Props> = ({ collection, readOnly = true }) => {
  const {
    formState: { errors },
    control,
  } = useFormContext<ReadModel>();

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
          <TranslatedInputText
            collection={collection}
            errorMessage={errors.employee_id}
            fieldName="employee_id"
            name="employee_id"
            isRequired={true}
            value={value}
            onChange={(value: string) => {
              onChange(value);
            }}
            placeholder="Enter your name"
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
