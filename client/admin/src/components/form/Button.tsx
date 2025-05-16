import { Button as AntdButton, ButtonProps } from "antd";
interface IBtnProps extends ButtonProps {
  buttonText: string;
}
const Button = ({ buttonText, ...rest }: IBtnProps) => {
  return <AntdButton {...rest}>{buttonText}</AntdButton>;
};

export default Button;
