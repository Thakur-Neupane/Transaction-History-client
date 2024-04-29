
import './App.css';
import {Routes, Route} from "react-router-dom";
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  

  return <div className='wrapper'>
<Routes>
<Route path ='/' element ={<Login></Login>}/>
<Route path ='/signup' element ={<Signup></Signup>}/>
<Route path ='/dashboard' element ={<Dashboard></Dashboard>}/>


</Routes>

  </div>
   
}

export default App;
