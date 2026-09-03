import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Support from './pages/suport/Suport'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Cadastrar from './pages/cadastrar/Cadastrar'
import Perfil from './pages/perfil/Perfil'
import HomeAluno from './pages/homealuno/HomeAluno'
import HomeAdmin from './pages/homeadm/HomeAdm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/sobre"
            element={<About />}
          />
          <Route
            path="/suporte"
            element={<Support />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
           <Route
            path="/cadastrar"
            element={<Cadastrar />}
          />
          <Route
            path="/perfil"
            element={<Perfil />}
          />
          <Route
            path="/homealuno"
            element={<HomeAluno />}
          />
          <Route
            path="/homeadmin"
            element={<HomeAdmin />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
