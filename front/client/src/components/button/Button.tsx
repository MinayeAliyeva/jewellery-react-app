import { Button as AntdButton, ButtonProps } from "antd";
import { FC } from "react";
interface IButtonProps extends ButtonProps {
  buttonText?: string;
}
const Button: FC<IButtonProps> = ({ buttonText, ...rest }) => {
  return <AntdButton {...rest}>{buttonText}</AntdButton>;
};

export default Button;
