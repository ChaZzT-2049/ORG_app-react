import Card from "../card"
import "./Equipo.css"
const Equipo = (props) =>{
    const {titulo, fondo, primario, id} = props.equipo
    const {colaboradores, eliminarColaborador, cambiarColor, favorito} = props
    const sFondo = {
        backgroundColor: fondo
    }
    const sTitulo ={
        borderColor: primario
    }
    return <>
        {colaboradores.length > 0 && <section className="equipo" style={sFondo}>
                <input type="color" className="input-color" value={primario} 
                    onChange={(event) =>{
                        cambiarColor(event.target.value, id)
                    }} 
                />
                <h3 style={sTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, index) => 
                        <Card 
                            key={index} datos={colaborador} primario={primario} 
                            eliminar={eliminarColaborador}
                            favorito={favorito}
                        />
                    )}
                </div>
            </section>
        }
    </>
}
export default Equipo;