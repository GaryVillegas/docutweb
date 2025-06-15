import "./App.module.css";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/MessageContext";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MessageProvider>
          <AppRouter />
        </MessageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
