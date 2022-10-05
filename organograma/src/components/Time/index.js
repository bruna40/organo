import './index.css'
import Card from '../Card'


export default function Time({nome, corPrimaria, corSecundaria, card}) {
    return(
        card.length > 0 && 
        (<section
            className="time"
            style={
                {backgroundColor: corSecundaria }
            }

        >
            <h3
            style={
                {borderColor: corPrimaria}
            }
            >
                {nome}
            </h3>
            <div className="card">
                {card.map((colaborador) =>  <Card 
                    imagem={colaborador.imagem}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                />)}
            </div>
        </section>)
    )
}