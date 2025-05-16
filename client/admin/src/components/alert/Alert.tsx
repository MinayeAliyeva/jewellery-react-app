import { AlertProps, Alert as AntdAlert } from "antd";

const Alert = ({ ...rest }: AlertProps) => {
  return <AntdAlert {...rest} />;
};

export default Alert;
