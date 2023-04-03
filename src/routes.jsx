import {Route, Routes , BrowserRouter} from 'react-router-dom'
import Home from './App'
// import Admin from './Pages/Admin/index'
// import Cliente from './Pages/Cliente'
import Login from './Pages/Login'
// import Erro from './Pages/Erro'
 


function RoutesApp(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            {/* <Route path="/Admin" element={<Admin/>} />
            <Route path="/Cliente" element={<Cliente/>} />
            

            <Route path="/*" element={<Erro/>} />  */}
        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp