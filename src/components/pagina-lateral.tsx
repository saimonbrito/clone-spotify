
import './pagina-lareral.css'
export function PaginaLateral(){
    return(
        <div className='lateral'>
            <div className='biblioteca'>
                <div>
                
                <p><span>|||</span> Sua Biblioteca</p>
                </div>
                <span>+</span>
            </div>

            <div className='cards'>
                <h3>Crie sua primeira playlist</h3>
                <p>É facio, vamos te ajudar.</p>
                <button  className='button-cards'>Criar playlist</button>
            </div>

            <div  className='cards2'>
                <h3>Que tal seguir um podcast novo?</h3>
                <p>Avisaremos você sobre novos episodios.</p>
                <button className='button-cards'>Explorar podcasts</button>
            </div>

            <div className='normas'>
             
                <ul className='links'>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Segurança e Centro de privacidade</a></li>
                    <li><a href="">Politica de privacidade</a></li>
                </ul>
                <ul className='links'>
                    <li><a href="">Cookies</a></li>
                    <li><a href="">Sobre anucios</a></li>
                    <li><a href="">Acessibilidade</a></li>
                    
                </ul>
                    
            </div>

            <button className='.button-pagina-lateral'>Português do Brasil</button>
        </div>
    )
}