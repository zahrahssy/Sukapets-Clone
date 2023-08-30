import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/home'
import Regist from './pages/register-page'
import Login from './pages/login-page'
import Forgot from './pages/forgot-password';
import CatProduct from './pages/cat-product';
import DogProduct from './pages/dog-product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Regist/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/kucing' element={<CatProduct/>}></Route>
        <Route path='/anjing' element={<DogProduct/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;