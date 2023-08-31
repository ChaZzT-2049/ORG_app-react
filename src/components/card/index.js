import "./Card.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Card = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {primario, eliminar, favorito} = props
    return <div className="card">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminar(id)} />
        <div className="head" style={{background: primario}}>
            <img src={foto} alt={"Colaborador " + equipo + " " + nombre} />
        </div>
        <div className="card__content">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? 
            <AiFillHeart 
                cursor="pointer"
                color="red" 
                onClick={() => favorito(id)}
            /> : <AiOutlineHeart onClick={() => favorito(id)} cursor="pointer" /> }
        </div>
    </div>
}
export default Card;