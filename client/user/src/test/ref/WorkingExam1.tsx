import { ChangeEventHandler, memo, useRef, useState } from "react";
import InputComponent from "../component-test/InputComponent";
import TestUser from "../component-test/UserSidePanel";
import CheckBoxComponent from "../component-test/CheckBoxComponent";
import RadioBtnComponent from "../component-test/RadioBtnComponent";
import TextAreaComponent from "../component-test/TextAreaComponent";

interface IUser {
  name?: string;
  sname?: string;
  age?: number;
  check?: boolean;
  gender?: string;
  info?: string;
}
const WorkingExam1 = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const userRef = useRef<IUser>({
    name: "",
    sname: "",
    age: 0,
    check: false,
    gender: "",
    info: "",
  });
  //  HTMLInputElement | HTMLTextAreaElement
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value, checked } = e.target ?? {};

    if (name === "name") {
      userRef.current.name = value;
    }
    if (name === "sname") {
      userRef.current.sname = value;
    }
    if (name === "age") {
      userRef.current.age = +value;
    }
    if (name === "check") {
      userRef.current.check = checked;
    }
    if (name === "gender") {
      userRef.current.gender = value;
    }
    if (name === "info") {
      userRef.current.info = value;
    }
  };
  const toogleDrawer = () => {
    setShowUser(!showUser);
  };
  console.log("exam1 userRef ", userRef.current);

  return (
    <>
      {" "}
      <InputComponent onChange={onChange} name="name" />
      <br />
      <br />
      <InputComponent onChange={onChange} name="sname" />
      <br />
      <br />
      <InputComponent onChange={onChange} name="age" type="number" /> <br />
      <br />
      <CheckBoxComponent
        type="checkbox"
        label="18 yas usduyem"
        onChange={onChange}
        name="check"
        checked={userRef.current.check}
      />{" "}
      <br />
      <br />
      <RadioBtnComponent
        type="radio"
        id="male"
        name="gender"
        value="male"
        label="male"
        onChange={onChange}
      />
      <RadioBtnComponent
        type="radio"
        id="female"
        name="gender"
        value="female"
        label="female"
        onChange={onChange}
      />
      <RadioBtnComponent
        type="radio"
        id="other"
        name="gender"
        value="other"
        label="other"
        onChange={onChange}
      />
      <br />
      <br />
      <TextAreaComponent
        label="Additional user info"
        onChange={onChange}
        name="info"
      />
      <br />
      <br />
      <button onClick={toogleDrawer}>Show User</button>
      <hr />
      <TestUser user={userRef.current} open={showUser} onClose={toogleDrawer} />
    </>
  );
};

export default memo(WorkingExam1);
