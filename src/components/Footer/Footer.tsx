import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {

    let data = new Date().getFullYear()


    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Farmácia Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>

                        <Link to='https://www.linkedin.com/in/alanalvess/' target='blank'>
                            <LinkedinLogo size={48} />
                        </Link>

                        <Link to='https://github.com/alanalvess' target='blank'>
                            <GithubLogo size={48} />
                        </Link>
                    </div>
                </div>
            </div>
        </>)
}

export default Footer