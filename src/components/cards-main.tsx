

import artis from './assets/playlist/1.jpeg'
import styles from './cards-main.module.css'

export function CardsMain(){
    return(
      
         <div className={styles.cardCar}>
            <img className={styles.cardCarImg} src={artis} alt="artista" />
            <span>Christmas Hits</span>
            <p>Artista</p>
        </div>
       
    )
}