import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full bg-[#891745] text-black 
                flex justify-center py-4'>

            <div className="container flex justify-between text-lg px-2 font-bold">
                <Link to='/home' className="text-2xl font-bold">Portfolio</Link>

                <div className='flex gap-4'>
                    <Link to='/curriculo' className=' text-1xl hover:underline'>Currículo</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar