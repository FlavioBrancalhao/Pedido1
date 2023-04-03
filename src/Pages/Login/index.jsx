import React, {useState} from 'react';
import {  signInWithEmailAndPassword, onAuthStateChanged   } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import "./style.css"

function Login() {

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid)
          navigate("/admin")
          // ...
        } else {
          console.log('Não logado')
        }
      });

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            //navigate("/admin")
            console.log(user + "logado");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }


  return (
    <section className="section sec">
      <div className="container">
        <div className="block">
            <h1>Faça seu login!</h1>
            <form action="">
                
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" placeholder="pedido@exemplo.com" />
                
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" placeholder="Digite sua senha" />
                <button onClick={onLogin} type="submit"><span>Entrar</span></button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
