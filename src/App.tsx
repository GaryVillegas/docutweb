import "./App.module.css";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/messageContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <MessageProvider>
        <AppRouter />
      </MessageProvider>
    </BrowserRouter>
  );
}

export default App;
