import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";

interface IProps extends Omit<ComponentProps<"input">, "type"> {
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}
const RadioBtnComponent: FC<IProps> = forwardRef(
  ({ label, id, ...rest }, ref) => {
    return (
      <>
        <input id={id} {...rest} ref={ref} type="radio" />
        <label htmlFor={id}>{label}</label>
      </>
    );
  }
);

export default RadioBtnComponent;
