
import { MainHeader } from "./main-header";


import { BuscaPokeapi } from "./form/testAPI/BuscaPokeapi";
import { CardsMain } from "./cards-main";

interface PropsAPI {
  item: string;
  searchTerm: string;
}

import styles from "./main.module.css";


import { useSearch } from './form/busca-api';



export function Main() {
 const { item,searchTerm,error }:any = useSearch(); 
  

  return (
      
        <div className={styles.mainHeder}>
              <MainHeader />
              <div className={styles.mainCar } >
              
                    <BuscaPokeapi/>
                   
                    {error && item.map((item:PropsAPI, index: number) => 
                        <div key={index}>
                          <p>{item.item}</p>
                        </div>
                    )}
              </div>
         
          
        </div>
    
  );
}
