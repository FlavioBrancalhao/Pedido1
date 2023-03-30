import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './App'
import Header from './components/Header'



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