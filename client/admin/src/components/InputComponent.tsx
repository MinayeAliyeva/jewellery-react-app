import { FC, InputHTMLAttributes } from "react";
import { Controller, FieldValues, Control } from "react-hook-form";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  control: Control<FieldValues>;
  name: string;
  labelText?: string;
  required?: boolean;
  defaultValue?: string;
}
const InputComponent: FC<InputProps> = ({
  name,
  required,
  labelText,
  control,
  defaultValue,
  ...rest
}) => {
  return (
    <>
      {labelText && <label>{labelText}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field, fieldState }) => (
          <>
            <input {...field} {...rest} />
            {fieldState?.error && (
              <div style={{ color: "red", fontSize: "12px" }}>
                Bu xana tələb olunur
              </div>
            )}
          </>
        )}
      />
    </>
  );
};

export default InputComponent;
