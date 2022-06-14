import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import dishes from './components/constants/constants'
import Reserve from './components/Reserve/Reserve';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header info='Fast food restaurant'/>
     <Routes>
       <Route path='/reserve' element={<Reserve/>}/>
       <Route path="/" element={<Home dishes={dishes}/>} />
       {/* <Route path="/aboutme" element={<AboutMe />} /> */}
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
