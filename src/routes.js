import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './App'
import Filme from './pages/Filme'
import Header from './components/Header'
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />

        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp