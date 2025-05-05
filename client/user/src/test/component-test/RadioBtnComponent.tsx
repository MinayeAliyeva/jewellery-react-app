import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";

interface IProps extends ComponentProps<"input"> {
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}
const RadioBtnComponent: FC<IProps> = forwardRef(
  ({ label, id, ...rest }, ref) => {
    return (
      <>
        <input id={id} {...rest} ref={ref} />
        <label htmlFor={id}>{label}</label>
      </>
    );
  }
);

export default RadioBtnComponent;
