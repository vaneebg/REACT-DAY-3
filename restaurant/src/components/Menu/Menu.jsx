import './Menu'
import './Menu.css'

const Menu=({dishes})=>{
    const listDishes=dishes.map((dish)=>{return <div className="dishes"><h3>{dish.name}</h3> <p>Descripción: {dish.description}</p><span>Precio: {dish.price}</span></div>})
    return(
        <div className="printDishes">
        <h2>Platos</h2>
       {listDishes}
        </div>
    )
}
export default Menu