import "./App.css";
import { useCustomRoutes } from "./routes/useRoutes";

function App() {
  const routes = useCustomRoutes();

  return <>{routes}</>;
}

export default App;
