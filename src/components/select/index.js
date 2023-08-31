import "./Select.css"
const Select = (props) => {
    const cambiarValor = (e) => {
        props.setValor(e.target.value)
    }
    return <div className="input-select">
        <label htmlFor="equipo">Equipo</label>
        <select value={props.valor} onChange={cambiarValor} name="equipo" id="equipo">
        <option value="" defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map( (option, index) => <option key={index} value={option}>{option}</option> ) }
        </select>
    </div>
}
export default Select;