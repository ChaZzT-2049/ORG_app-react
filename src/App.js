import './App.css';
import Header from "./components/header";
import Formulario from './components/form';
import Miorg from './components/miorg';
import Equipo from './components/equipo';
import Footer from './components/footer';

import { useState } from "react"
import hexToRgba from 'hex-to-rgba';
import { v4 as uuid} from "uuid";
import { AiOutlineUserAdd } from "react-icons/ai";

//{ mostrarCForm ? <Formulario /> : <></>}
function App() {
  if(!localStorage.getItem("colaboradores")){
    localStorage.setItem("colaboradores", "[]")
  }
  if(!localStorage.getItem("equipos")){
    const equiposBase = [
      {
        id: uuid(),
        titulo: "Programación",
        primario: "#57C278",
        fondo: "#D9F7E9",
      },
      {
        id: uuid(),
        titulo: "Front End",
        primario: "#82CFFA",
        fondo: "#E8F8FF",
      },
      {
        id: uuid(),
        titulo: "Data Science",
        primario: "#A6D157",
        fondo: "#F0F8E2",
      },
      {
        id: uuid(),
        titulo: "Devops",
        primario: "#E06B69",
        fondo: "#FDE7E8",
      },
      {
        id: uuid(),
        titulo: "UX UI",
        primario: "#DB6EBF",
        fondo: "#FAE9F5",
      },
      {
        id: uuid(),
        titulo: "Movil",
        primario: "#FFBA05",
        fondo: "#FFF5D9",
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        primario: "#FF8A29",
        fondo: "#FFEEDF",
      }
    ]
    localStorage.setItem("equipos", JSON.stringify(equiposBase))
  }
  let localColaboradores = JSON.parse(localStorage.colaboradores)
  let localEquipos = JSON.parse(localStorage.equipos)

  const [mostrarCForm, actualizarCForm] = useState(false);
  const [equipos, setEquipos] = useState(localEquipos)
  const [colaboradores, setColaboradores] = useState(localColaboradores)

  const registrar = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
    localColaboradores.push(colaborador)
    localStorage.colaboradores = JSON.stringify(localColaboradores)
    modificarForm();
  }
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
    localStorage.colaboradores = JSON.stringify(nuevosColaboradores)
  }

  const cambiarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.primario = color
        equipo.fondo = hexToRgba(color, 0.6)
      }
      return equipo
    })
    setEquipos(equiposActualizados)
    localStorage.equipos = JSON.stringify(equiposActualizados)
  }

  const crearEquipo = (equipo) =>{
    setEquipos([...equipos, equipo])
    localEquipos.push(equipo)
    localStorage.equipos = JSON.stringify(localEquipos)
  }

  const colaboradorFav = (id) =>{
    const colaboradoresFav = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresFav)
    localStorage.colaboradores = JSON.stringify(colaboradoresFav)
  }

  const modificarForm = () => {
    actualizarCForm(!mostrarCForm);
  }

  return (
    <div>
      <Header />
      <Miorg modificarForm={modificarForm} mostrarCForm={mostrarCForm} />
      { mostrarCForm && <Formulario 
        registrar={registrar} equipos={equipos.map((equipo) => equipo.titulo)}
        crearEquipo={crearEquipo}
      />}
      {
        colaboradores.length === 0 && <div className='message'><h1>No hay colaboradores</h1><p>Prueba a registrar un colaborador dando click en el botón. <AiOutlineUserAdd /></p></div>
      }
      {equipos.map((equipo, index) => 
      <Equipo 
        key={index} 
        equipo={equipo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador} 
        cambiarColor={cambiarColor}
        favorito={colaboradorFav}
      />
      )}

      <Footer />
      
    </div>
  );
}

export default App;
