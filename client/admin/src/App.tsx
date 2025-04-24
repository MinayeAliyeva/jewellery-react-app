import "./App.css";
import { useCustomRoutes } from "./routes/useRoutes";

function App() {
  const routes = useCustomRoutes();

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes> */}
      App
      {routes}
    </>
  );
}

export default App;
