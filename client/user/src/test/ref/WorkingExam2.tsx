import { memo, useRef, useState } from "react";
import InputComponent from "../component-test/InputComponent";
import UserSidePanel from "../component-test/UserSidePanel";
import CheckBoxComponent from "../component-test/CheckBoxComponent";
import RadioBtnComponent from "../component-test/RadioBtnComponent";

const WorkingExam2 = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const snameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const checkRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLInputElement | null>(null);
  const user = {
    name: nameRef?.current?.value,
    sname: snameRef?.current?.value,
    age: ageRef?.current?.value,
    check: checkRef.current?.checked || false,
    gender: genderRef?.current?.value,
  };
  console.log("user", user);

  const toogleDrawer = () => {
    setShowUser(!showUser);
  };
  return (
    <>
      <InputComponent ref={nameRef} />
      <InputComponent ref={snameRef} />
      <InputComponent ref={ageRef} type="number" />
      <CheckBoxComponent ref={checkRef} type="checkbox" label="18 uzerimisiniz?" />
      <RadioBtnComponent
        ref={genderRef}
        name="gender"
        id="female"
        value="female"
        type="radio"
        label="female"
      />
      <RadioBtnComponent
        ref={genderRef}
        name="gender"
        id="mele"
        value="mele"
        type="radio"
        label="mele"
      />
      <RadioBtnComponent
        ref={genderRef}
        name="gender"
        id="other"
        value="other"
        type="radio"
        label="other"
      />
      <button onClick={toogleDrawer}>Show User</button>
      <hr />
      {showUser && (
        <UserSidePanel user={user} open={showUser} onClose={toogleDrawer} />
      )}
    </>
  );
};

export default memo(WorkingExam2);
