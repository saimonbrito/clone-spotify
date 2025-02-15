// src/SearchComponent.js  

import { useSearch } from './busca-api';  
import styles from './SearchComponent.module.css'

const SearchComponent = () => {  
  const { searchTerm, setSearchTerm }:any = useSearch();  

  return (  
    <div className={styles.container}>  
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