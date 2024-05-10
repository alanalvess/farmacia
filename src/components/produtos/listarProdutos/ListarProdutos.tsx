import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { listar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { DNA } from "react-loader-spinner";
import CardProduto from "../cardProduto/CardProduto";

function ListarProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {

    try {

      await listar('/produtos', setProdutos)

    } catch (error: any) {
      ToastAlerta('Produto não encontrado', 'info')
    }
  }

  useEffect(() => {
    buscarProdutos()
  }, [produtos.length])

  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  )
}

export default ListarProdutos