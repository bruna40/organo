import './index.css'

export default function CampoTexto({label, required, value, onChange, placeholder}) {
    const handleChange = (event) => {
        onChange(event.target.value);
        console.log(event.target.value)
    }
    return(

        <div className="campo-texto">
            <label>{label}</label>
            <input  
                value={value}
                onChange={handleChange}
                required={required}
                placeholder={placeholder}
            />
        </div>

    )
}