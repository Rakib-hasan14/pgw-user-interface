import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import Success from './components/Success';
import Fail from './components/Fail';




function App() {

  return (
    <>
      <Routes>
        <Route path='/success' element={<Success />} />
        <Route path='/fail' element={<Fail />} />
        <Route excat path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
