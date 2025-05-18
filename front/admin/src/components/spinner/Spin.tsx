import { FC } from "react";
import { Spin as AntdSpin, SpinProps } from "antd";
const Spin: FC = ({ ...rest }: SpinProps) => <AntdSpin {...rest} />;

export default Spin;
