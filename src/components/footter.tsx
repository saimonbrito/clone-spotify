
import {ButtonSpotify} from './button-spotify';

import styled from './footer.module.css';

export function Footer() {


    return (
        <div className={styled.footer}>
            <p> Inscreva-se para curtir  música ilimitada e podcasts só com ancúncios. Não precisa de cartão de crédito.</p>
            <ButtonSpotify descripton={'Increva-se grátis'}/>
 


        </div>
    )   
}