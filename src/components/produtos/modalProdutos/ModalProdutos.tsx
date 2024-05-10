import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormProduto from '../formProduto/FormProduto';
import './ModalProdutos.css'

function ModalProdutos() {
  return (
    <>
      <Popup
        trigger={

          <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>
            Novo Produto
          </button>
        } modal>
        <div>
          <FormProduto />
        </div>
      </Popup>
    </>
  )
}

export default ModalProdutos