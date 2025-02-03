
import  { CardsMain } from './cards-main'
import { MainHeader } from './main-header'
import styles from './main.module.css'


export function Main(){
    return(
        <div className={styles.main}>
            <MainHeader/>
            
           <div className={styles.mainCar}>

           <CardsMain 
                title="Christmas Hits" 
                name="Artista"
            />
           <CardsMain
                title='simbady' 
                name='rits'
            />
           <CardsMain 
                title='sempr'
                name='kid'
             />
           <CardsMain 
                title='futuros' 
                name='test'
           />

           </div>
        </div>
    )
}