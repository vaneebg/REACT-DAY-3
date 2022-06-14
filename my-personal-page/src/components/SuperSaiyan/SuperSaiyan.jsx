import Main from "../Main/Main"
import Navbar from "../Navbar/Navbar"
import Contact from "../Contact/Contact"
import image from '../Main/assets/titan.jpg';
import './SuperSaiyan.css'
const learned=['Javascript','NodeJS','React','Express','MySQL','MongoDB']
const contact=['About me','More info']

function SuperSaiyan() {
  return (
    <div className="main">
    <Navbar title='Tecnologías' array={learned}/>
  
    <Main aboutme='Cursando FullStack developer en The Bridge'  img= {image}/>
 
    <Contact array={contact}/>
    </div>
  )
}

export default SuperSaiyan