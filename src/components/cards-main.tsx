

import artis from './assets/playlist/1.jpeg'
import './cards-main.css'

export function CardsMain(){
    return(
       <div className='cards'>
         <div className='cards-car'>
            <img src={artis} width={150} height={150} alt="artista" />
            <samp>Christmas Hits</samp>
            <p>Artista</p>
        </div>
       </div>
    )
}