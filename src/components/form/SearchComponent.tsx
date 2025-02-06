// src/SearchComponent.js  

import { useSearch } from './busca-api';  

const SearchComponent = () => {  
  const { searchTerm, setSearchTerm }:any = useSearch();  

  return (  
    <div>  
      <input  
        type="text"  
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}  
        placeholder="Digite para buscar..."  
      />  
    </div>  
  );  
};  

export default SearchComponent;