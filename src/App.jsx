import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Chocolate from './Chocolate';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/soda' element={<Soda/>}/>
          <Route path='/chips' element={<Chips/>}/>
          <Route path='/chocolate' element={<Chocolate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
