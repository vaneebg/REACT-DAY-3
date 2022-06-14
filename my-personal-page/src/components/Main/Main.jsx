import './Main.css'
// console.log(Navbar)

const Main=(props)=>{
    // console.log(props)
    return <div className="container">
        <h3>Contenido principal</h3>
        <p>{props.aboutme}</p>
        <br/>
        <img src={props.img} alt='titan'/>
       
    </div>
}

export default Main;