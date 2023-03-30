import './header.css';
import image from "./cardapio.png"


function Header(){
    return(
      <header>
            <h1>Logo.svg</h1>
            <div>
            <h3>Consultar meu Pedido</h3>
            <h3 className='ButtonLogin'>LOGIN</h3>
            
            <img className='Some' src={image}></img>
            </div>
            
            
    </header>
    )
}
export default Header;