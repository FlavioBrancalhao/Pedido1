import { onSnapshot, collection, doc,  serverTimestamp, QuerySnapshot} from "firebase/firestore"
import { useEffect, useState } from "react"
import  db  from '../src/services/firebase'
import React from 'react';
import './App.css'
import Header from "./components/Header";


function App() {
 
  const[pedidos , setPedidos] = useState([{}] );
  const ref_pedido = collection(db, "Pedido");
  useEffect(()=>{
    const list_pedidos = onSnapshot(ref_pedido, (querysnapshot) => {
      const itens_pedido = [];
      querysnapshot.forEach(doc => {
        itens_pedido.push({id: doc.id, ...doc.data()})
      })
      setPedidos(itens_pedido);
      return()=>{list_pedidos()}

    })
  } ,[]) 


  return (
<div>
<Header/>
   {pedidos.map(pedido => { 
    return(
      
      <div>
        
      <h1>Meus pedidos</h1>
      <div >
      <h2>{pedido.nome_cliente}</h2>
      </div>
      
      </div>
      
    )
   })}
   
</div>
  )
}

export default App
