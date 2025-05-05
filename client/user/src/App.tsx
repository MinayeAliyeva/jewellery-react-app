import "./App.css";
// import RoutesComponent from "./routes";

import WorkingExam1 from "./test/ref/WorkingExam1";
import WorkingExam2 from "./test/ref/WorkingExam2";

function App() {
  console.log("RERENDER PARENT");

  return (
    <>
      {" "}
      {/* <RoutesComponent /> */}
      <WorkingExam1 />
      <br />
      <br />
      <br />
      <hr />
      <WorkingExam2 />
    </>
  );
}

export default App;
