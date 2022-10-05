import './index.css';

export default function ListaSuspensa({label, required, value, onChange, itens})  { 

    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                required={required}
                value={value}
                onChange={evento => onChange(evento.target.value) }
            >
                {
                    itens.map((item) => {
                        return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}