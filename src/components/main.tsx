import { CardsMain } from "./cards-main";
import { MainHeader } from "./main-header";
import artis1 from "./assets/playlist/1.jpeg";
import artis2 from "./assets/playlist/9.jpeg";
import artis3 from "./assets/playlist/5.jpeg";
import artis4 from "./assets/playlist/11.jpeg";

import styles from "./main.module.css";



export function Main() {

  

  return (
    <div className={styles.main}>
      <MainHeader />

        <div>  
        
      </div>  

      <div className={styles.mainCar } >
        <CardsMain title="Christmas Hits" name="Artista" imegem={artis1} />
        <CardsMain title="simbady" name="rits" imegem={artis2} />
        <CardsMain title="sempr" name="kid" imegem={artis3} />
        <CardsMain title="futuros" name="test" imegem={artis4} />
      </div>
    </div>
  );
}
