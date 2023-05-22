import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Feed from './pages/feed/Feed'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
