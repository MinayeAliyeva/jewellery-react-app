import { FC, memo } from "react";
import { Drawer as AntdDrawer } from "antd";
interface IProps {
  onClose: () => void;
  open: boolean;
}
const Drawer: FC<IProps> = ({ open, onClose }) => {
  return (
    <>
      <AntdDrawer
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntdDrawer>
    </>
  );
};

export default memo(Drawer);
