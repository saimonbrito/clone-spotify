// src/App.js  

import { SearchProvider } from './busca-api';  
import SearchComponent from './SearchComponent';  
import DisplayComponent from './displayComponent'; // Componente para exibir os dados  

const App = () => {  
  return (  
    <SearchProvider>  
      <h1>Busca de Itens</h1>  
      <SearchComponent />  
      <DisplayComponent />  
    </SearchProvider>  
  );  
};  

export default App;