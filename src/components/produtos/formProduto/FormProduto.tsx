import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { atualizar, cadastrar, listar } from '../../../services/Services';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import { RotatingLines } from 'react-loader-spinner';

function FormProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    quantidade: 0,
    laboratorio: '',
    preco: 0,
    foto: '',
    categoria: null
  });

  async function buscarProdutoPorId(id: string) {
    await listar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    await listar(`/categorias/${id}`, setCategoria);
  }

  async function buscarCategorias() {
    await listar('/categorias', setCategorias);
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id != undefined) {
      try {

        await atualizar(`/produtos`, produto, setProduto)

        ToastAlerta('Produto atualizado com sucesso', 'sucesso');
        retornar()

      } catch (error: any) {
        ToastAlerta('Erro ao atualizar o produto', 'erro');
      }
    } else {

      try {

        await cadastrar(`/produtos`, produto, setProduto);

        ToastAlerta('Produto cadastrado com sucesso', 'sucesso');
        retornar();

      } catch (error: any) {
        ToastAlerta('Erro ao cadastrar o produto', 'erro');
      }
    }

    setIsLoading(false)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  useEffect(() => {

    buscarCategorias()

    if (id !== undefined) {
      buscarProdutoPorId(id)
    }

  }, [id])

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    })
  }, [categoria])

  const carregandoCategoria = categoria.nome === '';

  return (
    <>
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

        <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Nome"
              name="nome"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição do Produto</label>
            <input
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="quantidade">Quantidade do Produto</label>
            <input
              value={produto.quantidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              placeholder="Descrição"
              name="quantidade"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="laboratorio">Laboratório do Produto</label>
            <input
              value={produto.laboratorio}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Laboratório"
              name="laboratorio"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="preco">Preço do Produto</label>
            <input
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              placeholder="Preço"
              name="preco"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="foto">Foto do Produto</label>
            <input
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Foto"
              name="foto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Categoria do produto</p>

            <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded'
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>Selecione uma categoria</option>

              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id} >{categoria.nome}</option>
                </>
              ))}

            </select>

          </div>

          <button
            disabled={carregandoCategoria}
            type='submit'
            className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
          >

            {carregandoCategoria || isLoading ?

              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />

              : id !== undefined ? 'Editar' : 'Cadastrar'}

          </button>
        </form>
      </div>
    </>
  )
}

export default FormProduto