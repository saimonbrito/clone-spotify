import './header.css'
import Logo from '../../public/favicon.png'
import { House,Search,Layers } from 'lucide-react'
 
 export function Header(){
    return(
        <div className='reader'>
            <div><img src={Logo}  width={30} height={30} alt="" /></div>
           
            <div className='input'>
                 <div className='home'><House/></div>
                    <div className='pesquisa'>
                      <Search/>
                       <input type="text" placeholder="O que você quer ouvir? " />
                      <Layers/>
                    </div>
                 </div>
            <div>Instalar aolicativo</div>
            <div>Inscreva-se</div>
            <button className='button_header'>Entrar</button>
        </div>
    )
 }