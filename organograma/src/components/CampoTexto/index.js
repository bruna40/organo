import './index.css'

export default function CampoTexto(props) {
    const handleChange = (event) => {
        props.onChange(event.target.value);
        console.log(event.target.value)
    }
    return(

        <div className="campo-texto">
            <label>{props.label}</label>
            <input  
                value={props.value}
                onChange={handleChange}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>

    )
}