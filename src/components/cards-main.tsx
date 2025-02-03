


import styles from './cards-main.module.css'
interface cardProps{
    title: string
    name: string
    imegem: string
}

export function CardsMain({title,name,imegem}:cardProps){
    return(
      
         <div className={styles.mainCardCar}>
            <img className={styles.mainCardCarImg} src={imegem} alt="artista" />
            <span>{title}</span>
            <p>{name}</p>
        </div>
       
    )
}