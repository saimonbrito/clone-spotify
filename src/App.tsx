import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";
import { SearchProvider } from './components/form/busca-api';  
import  "./App.css";

function App() {
  return (
    <SearchProvider>
    <div className="containerApp">
      <Header />
      <div className="central-app">
        <Sidebar />
        <Main />
      </div>
    </div>
    </SearchProvider>
  );
}

export default App;
