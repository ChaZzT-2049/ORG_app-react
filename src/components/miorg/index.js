import "./Miorg.css"
import Boton from "../boton"
import { AiOutlineUserAdd, AiOutlineArrowUp } from "react-icons/ai";
const Miorg = (props) => {
    return <section className="org__section">
        <h3>Mi Organización</h3>
        <Boton onClick={props.modificarForm} className="btn--round">
            { props.mostrarCForm ? <AiOutlineArrowUp /> : <AiOutlineUserAdd /> }
        </Boton>
    </section>
}
export default Miorg