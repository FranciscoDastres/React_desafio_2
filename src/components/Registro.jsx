import React from 'react'
import Alert from './Alert'
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";


export default function Registro() {
  return (
    <>
    <div className='container'>
      <h1>Crea una cuenta </h1>
      <br />
      <div className='icon'>
        <SocialButton nameicon={<BsFacebook />} />
        <SocialButton nameicon={<BsGithub />} />
        <SocialButton nameicon={<BsLinkedin />} />
        </div>
      <br />
      <p>O usa tu email para registrarte</p>
      <br />
      <Formulario />
      </div>
    </>
  )
}

