
import  { CardsMain } from './cards-main'
import { MainHeader } from './main-header'
import './main.css'


export function Main(){
    return(
        <div className="main">
            <MainHeader/>
           <div className='main-car'>

           <CardsMain/>
           <CardsMain/>
           <CardsMain/>
           <CardsMain/>

           </div>
        </div>
    )
}