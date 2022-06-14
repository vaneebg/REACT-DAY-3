import './Header.css'
// import React from 'react';

// class Header extends React.Component {
//     render() {
//     return <h1>{this.props.title}</h1>;
//     }
//     }

// Desestructuras props y te traes directamente lo que necesites usar solo

const Header=({title})=>{
return <h1>{title}</h1>
}

export default Header;
