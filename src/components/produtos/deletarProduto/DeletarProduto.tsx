import { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate, useParams } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { deletar, listar } from '../../../services/Services'
import { ToastAlerta } from '../../../utils/ToastAlerta'

function DeletarProduto() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [produto, setProduto] = useState<Produto>({} as Produto)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto)
    } catch (error: any) {
      ToastAlerta('Produto não localizado', 'info')
    }
  }

  async function deletarProduto() {
    setIsLoading(true)

    try {
      await deletar(`/produtos/${id}`)

      ToastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      ToastAlerta('Erro ao apagar o produto', 'erro')
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/produtos")
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  return (
    <>
      <div className='container w-1/3 mx-auto'>
        <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

        <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

          <div>
            <h4 className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>{produto.nome}</h4>

            <div className=' flex p-4 '>
              <img className='w-48' src={produto.foto} alt="foto do produto" />
              <div className='p-4'>
                <p>Preço: {produto.preco}</p>
                <p>Descrição: {produto.descricao}</p>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Laboratório: {produto.laboratorio}</p>
                <p>Categoria: {produto.categoria?.nome}</p>
              </div>

            </div>
          </div>

          <div className="flex">
            <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
            <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarProduto}>

              {isLoading ?
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                /> :
                <span>Sim</span>
              }

            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeletarProduto