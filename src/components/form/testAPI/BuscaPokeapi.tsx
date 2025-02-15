import api from './serverAPI';
import { useEffect, useState } from 'react';
import styles from "./buscaAPI.module.css";


 type Pokemon = {
   genres: string;
   name: string;
   id: number;
   urlImg: string;
}
export function BuscaPokeapi() {
   const [data, setData] = useState<Pokemon[]>([]);

   useEffect(() => {
           async function fetchData() {

           try {
                   const response = await api.get('/artists');
                   if (response.status !== 200) {  
                       throw new Error('Erro ao buscar os dados');  
                   }  
                   const datas = response.data; 

                   setData(datas);
           
                   console.log(datas);  
               
           } catch (error) {  
                  console.error('Erro:', error);  
           }  
       
          
       }
       fetchData();    

   },[]);    

    
   return (
       <div className={styles.container}>
               {data.map((item) => (   
                   <div key={item.id} className={styles.containerCard}>  
                       <h1>{item.name}</h1>  
                       <p>{item.genres}</p>  
                       <img src={item.urlImg} width={100}   height={100}/>
                   </div>
               )
               )}    

       </div>
   )
}