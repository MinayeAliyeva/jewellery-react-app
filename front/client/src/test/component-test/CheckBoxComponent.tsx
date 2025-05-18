import { ComponentProps, FC, ForwardedRef, forwardRef } from "react";

interface IProps extends Omit<ComponentProps<"input">, "type"> {
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}
const CheckBoxComponent: FC<IProps> = forwardRef(({ label, ...rest }, ref) => {
  return (
    <>
      <input type="checkbox" {...rest} ref={ref} />
      {label && <span>{label}</span>}
    </>
  );
});

export default CheckBoxComponent;
