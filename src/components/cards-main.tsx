

import artis from './assets/playlist/1.jpeg'
import styles from './cards-main.module.css'
interface cardProps{
    title: string
    name: string
}

export function CardsMain({title,name}:cardProps){
    return(
      
         <div className={styles.cardCar}>
            <img className={styles.cardCarImg} src={artis} alt="artista" />
            <span>{title}</span>
            <p>{name}</p>
        </div>
       
    )
}