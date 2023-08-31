import "./Input.css"
const Input = (props) => {
    const { type="text"} = props
    const cambiarValor = (event) => {
        props.setValor(event.target.value)
    }
    return <div className={`field field-${type}`}>
        <label htmlFor={props.label}>{props.label}</label>
        <input id={props.label} type={type} placeholder={props.placeholder + "..."} required={props.required} 
            value={props.valor}
            onChange={cambiarValor}
        />
    </div>
}
export default Input;