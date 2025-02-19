import styles from './main-header.module.css'

import { ButtonSpotify } from './button-spotify'

export function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <h2>Artistas populares</h2>
      <ButtonSpotify descripton="Entrar" />
    </div>
  )
}
