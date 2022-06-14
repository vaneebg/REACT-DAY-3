import './Header.css'
import { Link } from "react-router-dom";
// class Header extends React.Component {
//     render() {
//     return <h1>{this.props.title}</h1>;
//     }
//     }


const Header=({title})=>{
return (<>
<div className="nav">
<Link to="/">Home</Link>
<Link to="/contact">Contact</Link>
<Link to="/aboutme">About me</Link>

</div>
<h1>{title}</h1>

</>
)
}

export default Header;
