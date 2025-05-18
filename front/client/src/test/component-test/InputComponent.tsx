import { ComponentProps, FC, ForwardedRef } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface IInputComponent extends ComponentProps<"input"> {
  ref?: ForwardedRef<HTMLInputElement>;
  control: Control<FieldValues>;
  name: string;
}
const InputComponent: FC<IInputComponent> = ({ control, name, ...rest }) => {
  return (
    <Controller
      control={control}
      render={({ field }) => <input {...rest} {...field} />}
      name={name}
    />
  );
};

export default InputComponent;
