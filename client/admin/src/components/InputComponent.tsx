import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import { Controller, FieldValues, Control } from "react-hook-form";

interface InputProps extends FieldValues, Omit<TextFieldProps, "name"> {
  control: Control<FieldValues>;
  name: string;
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
        name={name as string}
        control={control}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field }) => <TextField {...field} {...rest} />}
      />
    </>
  );
};

export default InputComponent;
