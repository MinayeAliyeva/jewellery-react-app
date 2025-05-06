import { ComponentProps, FC } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface IControllerInput extends FieldValues, ComponentProps<"input"> {
  control: Control<FieldValues, any, FieldValues>;
}
const ControllerInput: FC<IControllerInput> = ({ name, control, ...rest }) => {
  return (
    <Controller
      name={name!}
      control={control}
      render={({ field }) => (
        <input
          {...rest}
          {...field}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
        />
      )}
    />
  );
};

export default ControllerInput;
