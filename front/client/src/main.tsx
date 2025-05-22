import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext.tsx";
import { store } from "./redux/store.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <Provider store={store}>
        {" "}
        <App />
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
