import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'; 
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import SuperSaiyan from "./components/SuperSaiyan/SuperSaiyan";
import UserForm from './components/UserForm/UserForm'


function App() {
  return (
    <div className="App">
   
    
   <BrowserRouter>
   <Header title='Página web Personal' info='Created at ...'/>
        <Routes>
          <Route path='/' element={<SuperSaiyan/>}/>
          <Route path="/contact" element={<UserForm />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
   
  
    </div>
  );
}

export default App;
