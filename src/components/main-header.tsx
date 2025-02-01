
import styles from'./main-header.module.css'
export function MainHeader(){
    return(
        <div className={styles.mainHeader}>
            <h2>Artistas populares</h2>
            <button>Mostrar tudo</button>
        </div>
    )
}