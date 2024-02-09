import { useEffect,useState} from "react"
import {useForm} from "react-hook-form"

import axios from 'axios'

const Crud = () => {

    axios.get('http://users-crud.academlo.tech/users/').then(resp => {
        console.log('resp',resp)
    })

    const {register, handleSubmit} = useForm()

    return(
        <div>
            <p>Hola mundo</p>
        
            <form onSubmit={handleSubmit((data) => {
                console.log("formulario enviado", data)})}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" {...register("nombre")}/> 

                <button type="submit">Enviar</button>
            </form>
        
        </div>
    )
}

export default Crud