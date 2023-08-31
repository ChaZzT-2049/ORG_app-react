import "./Formulario.css"
import Input from "../input";
import Select from "../select";
import Boton from "../boton";
import { useState } from "react";
import { v4 as uuid} from "uuid";
import hexToRgba from "hex-to-rgba";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("#000000");

    const{ registrar, crearEquipo} = props;

    const enviar = (event) => {
        event.preventDefault();
        const datosForm = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo,
            fav: false
        }
        registrar(datosForm)
    }
    const enviarEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({id: uuid(), titulo, primario: color, fondo: hexToRgba(color, 0.6)})
    }
    return <section className="formulario">
        <form onSubmit={enviar}>
            <h2>Rellena el formulario para agregar un nuevo colaborador.</h2>
            <Input label="Nombre" placeholder="Ingresar nombre" required 
                valor={nombre}
                setValor={setNombre}
            />
            <Input label="Puesto"placeholder="Ingresar puesto" required 
                valor={puesto}
                setValor={setPuesto}
            />
            <Input label="Foto" placeholder="Ingresar enlace de foto" required 
                valor={foto}
                setValor={setFoto}
            />
            <Select equipos={props.equipos} valor={equipo} setValor={setEquipo}/>
            <Boton className="btn">Crear</Boton>
        </form>
        <form onSubmit={enviarEquipo}>
            <h2>Rellena el formulario para agregar un nuevo equipo.</h2>
            <Input label="Equipo" placeholder="Ingresar nombre de Equipo" required 
                valor={titulo}
                setValor={setTitulo}
            />
            <Input label="Color"placeholder="Ingresar un color en hexadecimal #000000" required
                type="color"
                valor={color}
                setValor={setColor}
            />
            <Boton className="btn">Crear Equipo</Boton>
        </form>
    </section>
}
export default Formulario;