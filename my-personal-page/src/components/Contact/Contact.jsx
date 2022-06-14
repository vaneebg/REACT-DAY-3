import './Contact.css'
import { Link } from "react-router-dom";


const Contact=({array})=>{
    const listContact=array.map((element,indice)=><button className="btncontact" key={indice}>{element}</button>)
    return (
    <div className="contact">
        {listContact}
        <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Contact;