import Produto from '../../../models/Produto'
import { Link } from 'react-router-dom'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <>
      <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
          <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
            <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          </div>
          <div className=' flex p-4 '>
            <img src={produto.foto} alt="foto do produto" className='h-48 rounded-xl' />
            <div className=' p-4'>

              <p>Preço: {produto.preco.toFixed(2).replace('.', ',')}</p>
              <p>Descrição: {produto.descricao}</p>
              <p>Quantidade: {produto.quantidade}</p>
              <p>Laboratório: {produto.laboratorio}</p>

              <p>Categoria: {produto.categoria?.nome}</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>

          <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardProduto