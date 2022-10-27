import React from 'react';
import './App.scss';
import Home from '~/pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from '~/pages/Shop';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
