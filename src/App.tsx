import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'

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

import { AuthProvider } from './contexts/AuthContext'
import { NavProvider, NavContext } from './contexts/NavContext'
import NavbarAluno from './components/navbar/NavbarAluno'
import NavbarAdmin from './components/navbar/NavbarAdmin'


import { ToastContainer } from 'react-toastify'
import { CartProvider } from './contexts/CartContext'
import ScrollToTop from './components/scrolltotop/ScrollToTop'

import Categorias from './pages/categorias/Categorias'
import Exercicios from './pages/exercicios/Exercicios'
import ExercicioDetalhe from './pages/exercicios/ExercicioDetalhe'

function AppContent() {

  const { tipoNavbar } = useContext(NavContext)

  return (
    <>
      {tipoNavbar === "publica" && <Navbar />}

      {tipoNavbar === "aluno" && <NavbarAluno />}

      {tipoNavbar === "admin" && <NavbarAdmin />}
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/sobre" element={<About />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/homealuno" element={<HomeAluno />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/exercicios/:categoriaId" element={<Exercicios />} />
          <Route path="/exercicio/:id" element={<ExercicioDetalhe />} />
        </Routes>

        <Footer />
      </CartProvider>
    </>
  )
}

function App() {

  return (
    <BrowserRouter>

      <AuthProvider>

        <NavProvider>

          <AppContent />

        </NavProvider>

      </AuthProvider>

      <ToastContainer />

    </BrowserRouter>
  )
}

export default App