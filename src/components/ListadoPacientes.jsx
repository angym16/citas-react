import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // console.log(pacientes.length === 0 ) Cantidad de pacientes
  
  // useEffect(() =>{
  //   if(pacientes.length > 0){
  //     console.log('Nuevo Paciente')
  //   }
    
  // },[pacientes] )

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes.length ? 
          (
            <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

              <p className="text-xl mt-5 mb-10 text-center">
                Administra tu {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>

              { pacientes.map( paciente => (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />
              ))}
            </>
          ) : (
            <>
              <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Comience agregando pacientes {''}
                <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
              </p>
            </>
          )}


        
       
    </div> 
  )
}

export default ListadoPacientes