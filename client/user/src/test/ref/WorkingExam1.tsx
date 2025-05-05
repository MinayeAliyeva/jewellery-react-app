import { memo, useRef, useState } from "react";
import InputComponent from "../component-test/InputComponent";
import TestUser from "../component-test/UserSidePanel";

interface IUser {
  name?: string;
  sname?: string;
  age?: number;
}
const WorkingExam1 = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const userRef = useRef<IUser>({ name: "", sname: "", age: 0 });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target ?? {};
    if (name === "name") {
      userRef.current.name = value;
    }
    if (name === "sname") {
      userRef.current.sname = value;
    }
    if (name === "age") {
      userRef.current.age = +value;
    }
  };
  const toogleDrawer = () => {
    setShowUser(!showUser);
  };
  return (
    <>
      {" "}
      <InputComponent onChange={onChange} name="name" />
      <InputComponent onChange={onChange} name="sname" />
      <InputComponent onChange={onChange} name="age" type="number" />{" "}
      <button onClick={toogleDrawer}>Show User</button>
      <hr />
  
        <TestUser
          user={userRef.current}
          open={showUser}
          onClose={toogleDrawer}
        />
   
    </>
  );
};

export default memo(WorkingExam1);
