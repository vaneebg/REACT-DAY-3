import './Contact.css'


// import React from 'react';

// class Navbar extends React.Component {
//     render() {
//     return this.props.title
//     }
//     }


const Navbar=({array})=>{
    const listContact=array.map((element,indice)=><button className="btncontact" key={indice}>{element}</button>)
    return (
    <div className="contact">
        {listContact}
        
        </div>
    )
}

export default Navbar;