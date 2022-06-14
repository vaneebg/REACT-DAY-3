import { Link } from 'react-router-dom'
import './Header'
import './Header.css'

const Header =({info})=>{
    return(<>
        <div className="nav">
<Link to="/menu">Menu</Link>
<Link to="/home">Home</Link>
<Link to="/reserve">Reservar</Link>
        </div>
<h1>{info}</h1>
        </>
    )
}


export default Header