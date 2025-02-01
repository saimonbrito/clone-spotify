

import artis from './assets/playlist/1.jpeg'
import styles from './cards-main.module.css'

export function CardsMain(){
    return(
      
         <div className={styles.cardCar}>
            <img src={artis} width={150} height={150} alt="artista" />
            <samp>Christmas Hits</samp>
            <p>Artista</p>
        </div>
       
    )
}