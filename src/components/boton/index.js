import "./Boton.css";
const Boton = (props) => {
    return <button onClick={props.onClick} className={props.className}>{props.children}</button>
}
export default Boton;