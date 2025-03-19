// import React from 'react';
import { useState, useEffect } from "react";
import Error from "./error";

/* useEffect
import {useEffect} from "react"

useEffect( () =>{
    console.log('El componenete está listo')
},[])*/

/* const [cliente, setCliente] = useState({});
   const [total, setTotal]= useState(0);
   const [cliente, setCliente] = useState([]);
   const [modal, setModal] = useState(false); */


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect( () => {
        // console.log(paciente);
        if(Object.keys(paciente).length > 0){
            // console.log(paciente)
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }
    }, [paciente])

    
    const generarId = () =>{  //Generar Id´s de forma aleatoria
        const random = Math.random().toString(17).substring(2);
        const fecha = Date.now().toString(17)
        return random + fecha 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        
        //Validación del Formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('Hay al menos un campo vacío')

            setError(true)
            return;
        }
        setError(false)

        //Objeto Paciente
        const objetoPaciente = {
            nombre,
            propietario, 
            email,
            fecha,
            sintomas,
           
        }
        if(paciente.id){
           //Editando Registro
            objetoPaciente.id = paciente.id
            // console.log(objetoPaciente)
            // console.log(paciente)


            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //Nuevo Registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente]);
        }
        // setPacientes(objetoPaciente)
        //console.log(objetoPaciente)
        // setPacientes([...pacientes, objetoPaciente]);

        //Reiniciar el Formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {' '}
                <span className='text-indigo-600 font-bold'>Adminístralos</span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="">
                    <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor='email' className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email del propietario"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>
                <input
                    type="submit"
                    className="mt-5 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>
        </div>
    );
}

export default Formulario;
