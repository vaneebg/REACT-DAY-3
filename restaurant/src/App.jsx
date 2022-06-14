import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import dishes from './components/constants/constants'


function App() {
  return (
    <div className="App">
     <Header info='Fast food restaurant'/>
     <Home dishes={dishes}/>
    </div>
  );
}

export default App;
