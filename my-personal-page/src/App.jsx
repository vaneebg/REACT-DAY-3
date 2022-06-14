import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'; 
import Header from "./components/Header/Header";
import SuperSaiyan from "./components/SuperSaiyan/SuperSaiyan";
import UserForm from './components/UserForm/UserForm'



function App() {
  return (
    <div className="App">
    <Header title='Página web Personal' info='Created at ...'/>
    
   <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<SuperSaiyan/>}/>
          <Route path="/contact" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
   
  
    </div>
  );
}

export default App;
