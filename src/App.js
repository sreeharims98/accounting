import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route
          exact
          path="/admin"
          component={() => {
            if (localStorage.getItem("finoxen") === "true") {
              return <AdminPage />;
            } else {
              return <LoginPage />;
            }
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
