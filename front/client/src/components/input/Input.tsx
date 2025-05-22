import { FC } from "react";
import { Controller, FieldValues, Control } from "react-hook-form";
import { Input as AntdInput, InputProps } from "antd";
interface IInputProps extends InputProps {
  control: Control<FieldValues>;
  name: string;
  labelText?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}

const Input: FC<IInputProps> = ({
  name,
  required,
  labelText,
  control,
  defaultValue = "",
  error,
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
        render={({ field }) => (
          <>
            <AntdInput {...field} {...rest} />
            {error && (
              <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Input;
