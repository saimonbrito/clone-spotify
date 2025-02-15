
import { MainHeader } from "./main-header";


import { BuscaPokeapi } from "./form/testAPI/BuscaPokeapi";

interface PropsAPI {
  item: string;
  searchTerm: string;
}

import styles from "./main.module.css";


import { useSearch } from './form/busca-api';



export function Main() {
 const { item,searchTerm,error }:any = useSearch(); 
  console.log("test " + item);

  return (
      
        <div className={styles.mainHeder}>
          <MainHeader />
        <div>  
            
        </div>  
          <div className={styles.mainCar } >
           
            <BuscaPokeapi/>
            {searchTerm}
            {error && item.map((item:PropsAPI, index: number) => 
              <div key={index}>
                <p>{item.item}</p>
              </div>
            )}
          </div>
         
          
        </div>
    
  );
}
