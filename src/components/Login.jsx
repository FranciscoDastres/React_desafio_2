import { useState } from "react";
import Alert from "./Alert";
import Button from 'react-bootstrap/Button';


const Login = () => {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const iniciarSesion = (e) => {
        e.preventDefault();
        
        if (emailLog === "" || passwordLog === "") {
            setAlertMessage("¡LOGIN EXITOSO!");
            setAlertType("alert-success");
        } else {
            setAlertMessage("Correo electrónico o contraseña incorrecta. Por favor, vuelve a intentarlo nuevamente.");
            setAlertType("alert-danger");
        }

    };

    
    return (

        <form className="loginForm" onSubmit={iniciarSesion}>
            <h1>Inicio de Sesión</h1>

        <div className="form-group">
            <label>E-mail: </label>
            <input
                type="email"
                name="emailLog"
                className="form-control"
                onChange={(e) => setEmailLog(e.target.value)}
                value={emailLog}
            />
        </div>

        <div className="form-group">
            <label>Contraseña: </label>
            <input
                type="password"
                name="passwordLog"
                className="form-control"
                onChange={(e) => setPasswordLog(e.target.value)}
                value={passwordLog}
            />
        </div>

        <button className="btn btn-dark mt-3" type="submit"> 
            INICIAR SESIÓN
            </button>

    </form>

    );
};


export default Login;