import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';

import Products from './component/Products';
import { Route, Routes } from 'react-router-dom';
import Set from './component/Set';
import About from './component/About';
import Mobile from './component/Mobile';
import Signup from './component/Signup';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Set />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Mobile />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </>
  )
}

export default App;
