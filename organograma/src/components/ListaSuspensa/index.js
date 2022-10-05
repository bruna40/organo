import './index.css';

export default function ListaSuspensa(props) { 

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.value}
                onChange={evento => props.onChange(evento.target.value) }
            >
                {
                    props.itens.map((item) => {
                        return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}