import { onSnapshot, collection, doc,  serverTimestamp, QuerySnapshot} from "firebase/firestore"
import { useEffect, useState } from "react"
import  db  from '../src/services/firebase'
import React from 'react';
import './App.css'
import Header from "./components/Header";
import Footer from "./footer";



function App() {
 



  return (
<div>

<Header/>

 <Footer/>

   
</div>
  )
}

export default App
