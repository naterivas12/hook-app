import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange,onResetForm} = useForm({
    username: '',
    email: '',
    password:''
  });

  const {username,email,password} = formState


  return (
    <>
      <h1>Formulario con Customhook</h1>
      <hr />
      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        />
      <input 
        type="email"
        className="form-control mt-3"
        placeholder="kissmark@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input 
        type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={ onResetForm }> borrar</button>
    </>
  )
}
