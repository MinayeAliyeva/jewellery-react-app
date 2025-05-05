import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";

interface IInputComponent extends ComponentProps<"input"> {
  ref?: ForwardedRef<HTMLInputElement>;
}
const InputComponent: FC<IInputComponent> = forwardRef(({ ...rest }, ref) => {
  return <input {...rest} ref={ref} />;
});

export default InputComponent;
