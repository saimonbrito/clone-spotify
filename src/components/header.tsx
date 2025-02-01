import styles from './header.module.css'
import Logo from '../../public/favicon.png'
import { House,Search,Layers } from 'lucide-react'
 
 export function Header(){
    return(
        <div className={styles.reader}>
            <div><img src={Logo}  width={30} height={30} alt="" /></div>
           
            <div className={styles.input}>
                 <div className={styles.home}>
                  <House/>
                  </div>
                    <div className={styles.pesquisa}>
                      <Search/>
                       <input type="text" placeholder="O que você quer ouvir? " />
                      <Layers/>
                    </div>
                 </div>
            <div>Instalar aolicativo</div>
            <div>Inscreva-se</div>
            <button className={styles.buttonHeader}>Entrar</button>
        </div>
    )
 }