import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Spinner from './components/Spinner';
import Product from './components/Product';

function App() {
  return (
      <div>

        <div className='bg-slate-900'>
            <Navbar />
        </div>

       <Routes>
          <Route path='/' element = {<Home />} /> 
          <Route path='/cart' element = {<Cart />} /> 
       </Routes>


      </div>
  );
}
export default App;
