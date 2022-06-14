import './Home'
import './Home.css'
import img1 from '../assets/image2.jpg'

const home=[{id:1, lugar:'Valencia', horario:'10am-10pm', instalaciones:img1}]

const Home =()=>{
    const listHome=home.map((element)=>{return(<>
        <div className="el"><h2>Lugar</h2><p>{element.lugar}</p></div>
        <div className="elInstal"> <h2>Instalaciones</h2><img src={element.instalaciones} alt="" /></div>
        <div className="el"><h2>Horario</h2><p>{element.horario}</p></div>
        </>
     ) }  )
    return(
    <div className="home">
      {listHome}
     </div>

    )
}


export default Home