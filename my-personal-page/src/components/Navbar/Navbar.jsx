import './Navbar.css'


// import React from 'react';

// class Navbar extends React.Component {
//     render() {
//     return this.props.title
//     }
//     }


const Navbar=({title,array})=>{
    const listTechno=array.map((technology,indice)=><button className="btnav" key={indice}>{technology}</button>)
    return (
    <div className="navbar">
        <span className="title">{title}</span>
       
        {listTechno}
        
        </div>
    )
}

export default Navbar;