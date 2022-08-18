import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/DashBoard/Dashboard";

const code = new URLSearchParams(window.location.search).get("code");
const content = code ? <Dashboard code={code} /> : <Login />;

function App() {
  return <div className="app">{content}</div>;
}

export default App;
