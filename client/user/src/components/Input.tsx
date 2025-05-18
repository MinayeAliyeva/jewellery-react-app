import { FC, InputHTMLAttributes } from "react";
import { Controller, FieldValues, Control } from "react-hook-form";
import { Input as AntdInput } from "antd";
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  control: Control<FieldValues>;
  name: string;
  labelText?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}

const Input: FC<InputProps> = ({
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
