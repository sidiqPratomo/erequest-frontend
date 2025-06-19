import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SelectOption } from "../../../../base_models";
import { UpdateModel } from "../../core/_models";
import {
  SingleSelect,
  TranslatedInputText,
} from "../../../../components";
import { useAllUser } from "../../query/useAllUser";

interface Props {
  collection: string;
  readOnly?: boolean;
}

export const EditForm: FC<Props> = ({ collection, readOnly = false }) => {
  const {
    formState: { errors },
    control,
  } = useFormContext<UpdateModel>();
  const { data: dataUser } = useAllUser();

  return (
    <>
      <Controller
        name="user_id"
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
                label: user.first_name,
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
            errorsMessage={errors.user_id}
          />
        )}
      />

      <Controller
        name="departments"
        control={control}
        rules={{
          required: {
            value: true,
            message: "departments is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TranslatedInputText
            collection={collection}
            errorMessage={errors.departments}
            fieldName="departments"
            name="departments"
            isRequired={true}
            value={value}
            onChange={(value: string) => {
              onChange(value);
            }}
          />
        )}
      />

      <Controller
        name="position"
        control={control}
        rules={{
          required: {
            value: true,
            message: "position is required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TranslatedInputText
            collection={collection}
            errorMessage={errors.position}
            fieldName="position"
            name="position"
            isRequired={true}
            value={value}
            onChange={(value: string) => {
              onChange(value);
            }}
          />
        )}
      />
    </>
  );
};
