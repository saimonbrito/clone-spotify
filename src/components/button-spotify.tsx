import styles from './button-spotify.module.css'

interface ButtonSpotifyProps {
  descripton: string
}

export function ButtonSpotify({ descripton }: ButtonSpotifyProps) {
  return <button className={styles.buttonSidebar}>{descripton}</button>
}
