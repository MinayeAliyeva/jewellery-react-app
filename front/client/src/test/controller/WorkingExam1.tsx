import { memo } from "react";
import ControllerInput from "../controller-test/ControllerInput";
import { useForm } from "react-hook-form";

const WorkingExam1 = () => {
  const { control, watch } = useForm<{ username: string }>({
    defaultValues: { username: "" },
  });
  const username = watch("username");
  console.log(username);
  console.log("RERENDER");

  return (
    <>
      <ControllerInput control={control as any} name="username" />
    </>
  );
};

export default memo(WorkingExam1);
