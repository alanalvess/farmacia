import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastroCategorias" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
