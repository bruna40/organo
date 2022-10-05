import './index.css'

export default function Rodape() {
    return(
        <footer className='rodape'>
            <div className='logos'> 
                <img src={'/imagens/fb.png'} alt='Facebook'/>
                <img src={'/imagens/tw.png'} alt='Twitter'/>
                <img src={'/imagens/ig.png'} alt='Instagram'/>

            </div>
            <div>
                <img src={'/imagens/logo.png'} alt='Logo'/>
            </div>
            <div>
                <p>Desenvolvido por Alura e Bruna</p>
            </div>
        </footer>
    )
}