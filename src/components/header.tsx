import './header.css'
import Logo from '../../public/favicon.png'
 
 export function Header(){
    return(
        <div className='reader'>
            <div><img src={Logo}  width={30} height={30} alt="" /></div>
           
            <div className='input'>
                 <div className='home'>casa</div>
                    <div className='pesquisa'>
                      busca
                       <input type="text" placeholder="O que você quer ouvir? " />
                      iconi
                    </div>
                 </div>
            <div>Instalar aolicativo</div>
            <div>Inscreva-se</div>
            <div><button>Entrar</button></div>
        </div>
    )
 }