import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { listar } from '../../../services/Services';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardCategoria/CardCategoria';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function ListarCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias)
    } catch (error: any) {
      if (error) {
        ToastAlerta('Categoria não encontrada', 'erro')
      }
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}



export default ListarCategorias