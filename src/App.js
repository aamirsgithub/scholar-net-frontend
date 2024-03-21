import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
// import ScrollToTop from "./components/Common/ScrollToTop";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthProvider } from "./authentication/Auth";

function App() {
  return (
    <>
      <AuthProvider>
        {/* <DndProvider backend={HTML5Backend}> */}
          <BrowserRouter>
            <Router />
            {/* <ScrollToTop /> */}
          </BrowserRouter>
        {/* </DndProvider> */}
      </AuthProvider>
    </>
  );
}
export default App;
