import { FC, memo } from "react";
import {  Drawer, Layout } from "antd";
interface IUser {
  user: {
    name?: string;
    sname?: string;
    age?: number | string;
    gender?: string;
    check?: boolean;
  };
  open?: boolean;
  onClose: () => void;
}

const UserSidePanel: FC<IUser> = ({ user, open, onClose }) => {
  console.log("Rerender Child ");
  const { name, sname, age, gender, check } = user ?? {};
  return (
    <>
      <div style={{ background: "red" }}>
        <Drawer open={open} onClose={onClose}>
          <Layout style={{ minWidth: 300 }}>
            {" "}
            <i>Test User Info</i>
            <h1> name:{name && name}</h1>
            <h1>sname:{sname && sname}</h1>
            <h1>age: {age && age}</h1>
            <h1>gender: {gender && gender}</h1>
            <h1>18+: {check ? "yes" : "no"}</h1>
          </Layout>
        </Drawer>
      </div>
    </>
  );
};

export default memo(UserSidePanel);
