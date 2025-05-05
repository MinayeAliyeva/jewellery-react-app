import { memo, useRef, useState } from "react";
import InputComponent from "../component-test/InputComponent";
import UserSidePanel from "../component-test/UserSidePanel";

const WorkingExam2 = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const snameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const user = {
    name: nameRef?.current?.value,
    sname: snameRef?.current?.value,
    age: ageRef?.current?.value,
  };
  const toogleDrawer = () => {
    setShowUser(!showUser);
  };
  return (
    <>
      <InputComponent ref={nameRef} />
      <InputComponent ref={snameRef} />
      <InputComponent ref={ageRef} />{" "}
      <button onClick={toogleDrawer}>Show User</button>
      <hr />
      {showUser && (
        <UserSidePanel user={user} open={showUser} onClose={toogleDrawer} />
      )}
    </>
  );
};

export default memo(WorkingExam2);
