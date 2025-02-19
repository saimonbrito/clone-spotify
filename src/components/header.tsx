import { House, Layers, Search } from 'lucide-react'
import Logo from './assets/icons/favicon.png'

import styles from './header.module.css'

import { ButtonSpotify } from './button-spotify'

import SearchComponent from '../components/form/SearchComponent'

export function Header() {
  return (
    <div className={styles.container}>
      <div>
        <img src={Logo} width={30} height={30} alt="" />
      </div>

      <div className={styles.containerInput}>
        <div className={styles.containerInputIconiHome}>
          <House />
        </div>
        <div className={styles.containerInputPesquisa}>
          <Search />
          <SearchComponent />

          <Layers />
        </div>
      </div>
      <div className="containerApp">Instalar o Aplicativo</div>
      <div>Inscreva-se</div>
      <ButtonSpotify descripton="Entrar" />
    </div>
  )
}
