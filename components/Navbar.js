import {useState} from 'react';
import Link from 'next/link';
import {useEffect} from 'react';


function Navbar({active}) {
    let [nav, setNav] = useState(false);
    let [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("name") !== null) {
            setIsLogged(true);
        }
    }, [])
    return (
        <nav className="bg-white shadow-md lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-between mx-5 items-center">
                <div className="my-5 flex">
                    <Link href="/">
                    <img className="w-12 cursor-pointer" src="https://drive.google.com/uc?export=view&id=1mq0ZoUA08EZWfHNHDnLqEzsnbTpPAtiF" alt=""/>
                    </Link>
                </div>
                <div className="my-6 flex">
                    {nav ? (
                    <button onClick={() => setNav(!nav)} className="focus:outline-none text-green-600 block lg:hidden">
                        <svg className="h-8 w-8 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    ) : (
                    <button onClick={() => setNav(!nav)} className="focus:outline-none text-green-600 block lg:hidden">
                        <svg className="h-8 w-8 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    )}
                </div>
            </div>
            <div className={`lg:flex mx-5 item-center ${nav ? "flex" : "hidden"}`}>
                <div className="mb-5 lg:mb-0 text-green-600 font-medium lg:text-lg subpixel-antialiased">
                    
                    <a className={`hover:bg-green-600 ${active} rounded-lg p-2 hover:text-white mr-5`}><Link href="favorites" className="">Favorites</Link></a>
                    <a href="https://www.linkedin.com/in/jodypratama/" target="_blank" className="hover:bg-green-600 rounded-lg p-2 hover:text-white">Contact Me</a>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
