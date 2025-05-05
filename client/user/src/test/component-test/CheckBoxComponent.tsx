import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";

interface IProps extends ComponentProps<"input"> {
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}
const CheckBoxComponent: FC<IProps> = forwardRef(({ label, ...rest }, ref) => {
  return (
    <>
      <input {...rest} ref={ref} />
      {label && <span>{label}</span>}
    </>
  );
});

export default CheckBoxComponent;
