
import  { CardsMain } from './cards-main'
import { MainHeader } from './main-header'
import styles from './main.module.css'


export function Main(){
    return(
        <div className={styles.main}>
            <MainHeader/>
           <div className={styles.mainCar}>

           <CardsMain/>
           <CardsMain/>
           <CardsMain/>
           <CardsMain/>

           </div>
        </div>
    )
}