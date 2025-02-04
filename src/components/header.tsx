import Logo from "../../public/favicon.png";  
import { House, Search, Layers } from "lucide-react";
import styles from "./header.module.css";

import { ButtonSpotify } from "./button-spotify";

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
          <input type="text" placeholder="O que você quer ouvir? " />
          <Layers />
        </div>
      </div>
      <div>Instalar aolicativo</div>
      <div>Inscreva-se</div>
      <ButtonSpotify descripton="Entrar" />
    </div>
  );
}
