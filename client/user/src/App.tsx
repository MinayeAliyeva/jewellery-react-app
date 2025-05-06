import "./App.css";
import WorkingExam1 from "./test/controller/WorkingExam1";
// import RoutesComponent from "./routes";

// import WorkingExam1 from "./test/ref/WorkingExam1";
// import WorkingExam2 from "./test/ref/WorkingExam2";

function App() {
  console.log("RERENDER PARENT");

  return (
    <>
      {" "}
      {/* <RoutesComponent /> */}
      {/* <WorkingExam1 />
      <br />
      <br />
      <br />
      <hr />
      <WorkingExam2 /> */}
      <WorkingExam1 />
    </>
  );
}

export default App;
