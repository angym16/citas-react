import { use, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

//Props -> Propiedades - para pasar variables o funciones de otros componentes
//Ejemplo - sintaxis <Header nombreProp={datos o Funciones} />

//En un localStorage solo se pueden guardar Strings

function App() {

  // const[pacientes, setPacientes] = useState([]);
  // const[paciente, setPaciente] = useState({});


  //Guardar en el localStorage

  // useEffect(() => {
  //   const obtenerLS = () =>{
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS()
  // }, []);
  
  // useEffect(() => {
  //   const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
  //   pacientesLS?.length > 0 && setPacientes(pacientesLS);
  // }, [pacientes]);

  const [pacientes, setPacientes] = useState(() => 
    JSON.parse(localStorage.getItem('pacientes')) || []);
    const[paciente, setPaciente] = useState({});

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes)) //Convertir array a string
  }, [pacientes])
  
  const eliminarPaciente = (id) => {
    // console.log('Eliminando Paciente', id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        
        />

        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        
        />
      </div>
      
    </div>
  );
}

export default App;
