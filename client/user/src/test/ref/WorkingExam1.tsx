import { memo, useState } from "react";
import InputComponent from "../component-test/InputComponent";
import TestUser from "../component-test/UserSidePanel";
import CheckBoxComponent from "../component-test/CheckBoxComponent";
import RadioBtnComponent from "../component-test/RadioBtnComponent";
import TextAreaComponent from "../component-test/TextAreaComponent";

const user = {
  name: "",
  sname: "",
  age: 0,
  check: false,
  gender: "",
  info: "",
};
const WorkingExam1 = () => {
  const [showUser, setShowUser] = useState<boolean>(false);

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value, checked } = (event.target as HTMLInputElement) ?? {};

    if (name === "name") {
      user.name = value;
    }
    if (name === "sname") {
      user.sname = value;
    }
    if (name === "age") {
      user.age = +value;
    }
    if (name === "check") {
      user.check = checked;
    }
    if (name === "gender") {
      user.gender = value;
    }
    if (name === "info") {
      user.info = value;
    }
  };
  const toogleDrawer = () => {
    setShowUser(!showUser);
  };
  console.log("exam1 user", user);

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
        label="18 yas usduyem"
        onChange={onChange}
        name="check"
      />{" "}
      <br />
      <br />
      <RadioBtnComponent
        id="male"
        name="gender"
        value="male"
        label="male"
        onChange={onChange}
      />
      <RadioBtnComponent
        id="female"
        name="gender"
        value="female"
        label="female"
        onChange={onChange}
      />
      <RadioBtnComponent
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
      <TestUser user={user} open={showUser} onClose={toogleDrawer} />
    </>
  );
};

export default memo(WorkingExam1);
