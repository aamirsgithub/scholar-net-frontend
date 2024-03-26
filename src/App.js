import "./App.css";
import "./scss/volt.scss";
import "react-datetime/css/react-datetime.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { AuthProvider } from "./authentication/Auth";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
