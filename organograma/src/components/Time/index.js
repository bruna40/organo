import './index.css'
export default function Time({nome, corPrimaria, corSecundaria}) {
    return(
        <section
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
        </section>
    )
}