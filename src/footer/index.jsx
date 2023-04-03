import { useEffect, useState } from "react"
import "./style.css"
import '../index.css'

function Footer(){

    const [year, setYear] = useState()

    useEffect(() => {
        const today = new Date()
        const thisYear = today.getFullYear()
        setYear(thisYear)
    }, [])

    return(
        <footer className="section">

        <div className="container">

            <p>Logo.svg</p>
            
            <div className="row">
                <p>Contribuidores</p>
                <div className="us">
                    <p>Fernanda M Baccarini</p>
                    <a href=""><span>GitHub</span></a>
                    <span> | </span>
                    <a href=""><span>Linkedin</span></a>
            
                </div>
                <div className="us">
                    <p>Flávio Brancalhão</p>
                    <a href=""><span>GitHub</span></a>
                    <span> | </span>
                    <a href=""><span>Linkedin</span></a>
            
                </div>
            </div>

            <p>© {year} Desenvolvido por NovaTec</p>
            
        </div>
        
        </footer>
    )

    
}

export default Footer