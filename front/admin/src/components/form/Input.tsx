import { FC, memo } from "react";
import { Controller, FieldValues, Control } from "react-hook-form";
import { Input as AntdInput, InputProps } from "antd";
interface IInputProps extends Omit<InputProps, "name"> {
  control: Control<FieldValues>;
  name: string;
  labelText?: string;
  required?: boolean;
  defaultValue?: string;
}

const Input: FC<IInputProps> = ({
  name,
  required,
  labelText,
  control,
  defaultValue = "",
  ...rest
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {labelText && <label>{labelText}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field, fieldState }) => (
          <>
            <AntdInput {...field} {...rest} />
            {fieldState?.error && (
              <div style={{ color: "red", fontSize: "12px" }}>
                Bu xana tələb olunur
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default memo(Input);
