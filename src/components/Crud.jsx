import React, { useEffect } from "react";
import { useForm} from "react-hook-form";
import axios from 'axios';
import useCrud from "./useCrud";

const Crud = () => {
    const { register, handleSubmit } = useForm();
    const url = 'http://users-crud.academlo.tech/';
    const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(url)


    useEffect (() => {
        getUsers('/users/');
    },[])

    console.log(users);

    const onSubmit = (data) => {
        createUsers('/users',data);
        reset({
            email:'',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
    }

    useEffect(() => {
        getUsers('/users/');
    },[])


    return (
        <div>
            <div>
            <p>Formulario</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">email</label>
                <input type="mail" {...register("email")} />

                <label htmlFor="password">password</label>
                <input type="text" {...register("password")} />

                <label htmlFor="first_name">first_name</label>
                <input type="text" {...register("first_name")} />

                <label htmlFor="last_name">last_name</label>
                <input type="text" {...register("last_name")} />

                <label htmlFor="birthday">birthday</label>
                <input type="date" {...register("birthday")} />

                <label htmlFor="image_url">image_url</label>
                <input type="text" {...register("image_url")} />

                <button type="submit">Enviar</button>
            </form>
            </div>

            <div>

            </div>

        </div>
    )
}

export default Crud;
