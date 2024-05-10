import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'
import ListarProdutos from './components/produtos/listarProdutos/ListarProdutos'
import FormProduto from './components/produtos/formProduto/FormProduto'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarProduto" element={<FormProduto />} />
            <Route path="/editarProduto/:id" element={<FormProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
