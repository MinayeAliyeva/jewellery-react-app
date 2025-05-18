import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"textarea"> {
  label: string;
}
const TextAreaComponent: FC<IProps> = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest} />
    </>
  );
};

export default TextAreaComponent;
