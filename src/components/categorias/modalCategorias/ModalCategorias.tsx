import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormCategoria from '../formCategoria/FormCategoria';
import './ModalCategorias.css'

function ModalCategorias() {
  return (
    <>
      <Popup
        trigger={

          <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>
            Nova Categoria
          </button>
        } modal>
        <div>
          <FormCategoria />
        </div>
      </Popup>
    </>
  )
}

export default ModalCategorias