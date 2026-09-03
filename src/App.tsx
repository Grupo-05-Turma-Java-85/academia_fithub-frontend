import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Support from './pages/suport/Suport'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
