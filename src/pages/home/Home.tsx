import { Link } from 'react-router-dom'
import HomeBanner from '../../assets/home.png'
import ListarCategorias from '../../components/categorias/listarCategorias/ListarCategorias'

function Home() {
    return (
        <>

            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja Bem Vinde!</h2>
                        <p className='text-xl'>Os remédios com os melhores preços do mercado</p>

                        <div className="flex justify-around gap-4">
                            {/* <ModalPostagem /> */}
                            <button className='rounded bg-white text-blue-800 py-2 px-4'>
                                <Link to="/categorias">Ver categorias</Link>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={HomeBanner} alt="" className='w-2/3' />
                    </div>
                </div>
            </div>

            <ListarCategorias />
        </>
    )
}

export default Home