import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="central-app">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
