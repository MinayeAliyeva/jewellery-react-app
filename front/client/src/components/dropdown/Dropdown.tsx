import { FC, ReactNode } from "react";
import { Dropdown as AntdDropdown, Space } from "antd";
import { items } from "./data";
interface IProps {
  icon: ReactNode;
}
const Dropdown: FC<IProps> = ({ icon }) => (
  <AntdDropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {icon}
    
      </Space>
    </a>
  </AntdDropdown>
);

export default Dropdown;
