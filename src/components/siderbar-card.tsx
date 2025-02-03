
interface SideBarCardProps{
    titulo: string
    descricao: string
    descricaoButton: string
}

import styles from './siderbar-car.module.css'
import { ButtonSpotify } from './button-spotify'

export function SideBarCard({titulo,descricao,descricaoButton}:SideBarCardProps){
    return(
        
            <div className={styles.cards}>
                <span className={styles.titulo}>{titulo}</span>
                <span className={styles.descicao}>{descricao}</span>
                <ButtonSpotify descripton={descricaoButton}/>
              
            </div>
       
    )
}