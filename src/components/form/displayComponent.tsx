// src/DisplayComponent.js  
 
import { useSearch } from './busca-api';  

const DisplayComponent = () => {  
  const { items, error }:any = useSearch();  

  return (  
    <div>  
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}  
      <h2>Itens Encontrados:</h2>  
      <ul>  
        {items}  
      </ul>  
    </div>  
  );  
};  

export default DisplayComponent;