
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
                <button>Criar playlist</button>
            </div>

            <div  className='cards2'>
                <h3>Que tal seguir um podcast novo?</h3>
                <p>Avisaremos você sobre novos episodios.</p>
                <button>Explorar podcasts</button>
            </div>

            <div className='normas'>
                <ul className='list'>
                    <div><a href="">Legal</a></div>
                    <a href="">Segurança e Centro de privacidade</a>
                    <a href="">Politica de privacidade</a>
                    <a href="">Cookies</a>
                    <a href="">Sobre anucios</a>
                    <a href="">Acessibilidade</a>
                    <a href="">Cookies</a>

                    
                   

                   
                </ul>
                <button className='button'>Português do Brasil</button>
            </div>
        </div>
    )
}