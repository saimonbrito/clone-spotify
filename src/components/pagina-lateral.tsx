
import styles from './pagina-lareral.module.css'
import { LibraryBig } from 'lucide-react'

export function PaginaLateral(){
    return(
        <div className={styles.lateral}>
            <div className={styles.biblioteca}> 
                  
                <p ><LibraryBig/> Sua Biblioteca</p>
                <span>+</span>
            </div>

            <div className={styles.cards}>
                <h3>Crie sua primeira playlist</h3>
                <p>É facio, vamos te ajudar.</p>
                <button  className={styles.buttonCards}>Criar playlist</button>
            </div>

            <div  className={styles.cards2}>
                <h3>Que tal seguir um podcast novo?</h3>
                <p>Avisaremos você sobre novos episodios.</p>
                <button className={styles.buttonCards}>Explorar podcasts</button>
            </div>

            <div className={styles.normas}>
             
                <ul className={styles.links}>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Segurança e Centro de privacidade</a></li>
                    <li><a href="">Politica de privacidade</a></li>
                </ul>
                <ul className={styles.links}>
                    <li><a href="">Cookies</a></li>
                    <li><a href="">Sobre anucios</a></li>
                    <li><a href="">Acessibilidade</a></li>
                    
                </ul>
                    
            </div>

            <button className={styles.buttonPaginaLateral}>Português do Brasil</button>
        </div>
    )
}