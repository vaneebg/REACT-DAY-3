import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import dishes from './components/constants/constants'
import Reserve from './components/Reserve/Reserve';
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header info='Fast food restaurant'/>
     <Routes>
       <Route path='/reserve' element={<Reserve/>}/>
       <Route path="/menu" element={<Menu dishes={dishes}/>} />
       <Route path="/home" element={<Home />} />
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
