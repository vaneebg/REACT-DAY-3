import { Link } from 'react-router-dom'
import './Header'
import './Header.css'

const Header =({info})=>{
    return(<>
        <div className="nav">
<Link to="/">Home</Link>
<Link to="/reserve">Reservar</Link>
{/* <Link to="/aboutme">About me</Link> */}

</div>
        <h1>{info}</h1>
        </>
    )
}


export default Header