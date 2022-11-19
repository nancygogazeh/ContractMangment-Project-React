import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Userprofile from './components/Userprofile';
import Admindashboard from './components/Admindashboard';
import Contract from './Contract';



function App() {
  return (
    <BrowserRouter>
    <div >
     <Nav />
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Signup' element={<Signup/>}/> 
      <Route path='/Userprofile' element={<Userprofile/>}/> 
      <Route path='/Admindashboard' element={<Admindashboard/>}/> 

      <Route path='/Contract' element={<Contract />}/> 
     </Routes>
     <div className='mt-5'>
     <Footer /></div>
    </div>
    </BrowserRouter>

  );
}

export default App;
