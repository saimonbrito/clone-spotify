import styles from './sidebar.module.css'
import { LibraryBig } from 'lucide-react'
import { SideBarCard } from './siderbar-card'
import { ButtonSpotify } from './button-spotify'

export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.biblioteca}>
        <p>
          <LibraryBig /> Sua Biblioteca
        </p>
        <span>+</span>
      </div>

      <SideBarCard
        titulo="Crie sua primeira playlist"
        descricao="É facio, vamos te ajudar."
        descricaoButton="Criar Playlist"
      />
      <SideBarCard
        titulo="Que tal seguir um podcast novo?"
        descricao="Avisaremos você sobre novos episodios."
        descricaoButton="Explorar podcasts"
      />

      <ul className={styles.links}>
        <li>
          <a href="">Legal</a>
        </li>
        <li>
          <a href="">Segurança e Centro de privacidade</a>
        </li>
        <li>
          <a href="">Politica de privacidade</a>
        </li>
        <li>
          <a href="">Cookies</a>
        </li>
        <li>
          <a href="">Sobre anucios</a>
        </li>
        <li>
          <a href="">Acessibilidade</a>
        </li>
      </ul>

      <ButtonSpotify descripton="Português do Brasil" />
    </div>
  )
}
