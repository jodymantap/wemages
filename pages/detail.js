import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function detail(paramsid) {
    const [oneData, setOneData] = useState([]);
    useEffect( () => {
        axios.get(
        `https://jsonplaceholder.typicode.com/albums/1/photos?id=${paramsid.paramsid}`
        )
        .then(response => {
            setOneData(response.data[0]);
        })
    }, [])
    const favorites = (url) => {
        localStorage.setItem("fav", localStorage.getItem("fav") + ", " + url)
    }

    return (
        <div>
        <ToastContainer/>
        <div className="flex justify-center">
            <div className="bg-white shadow-md mx-5 my-5 rounded-lg lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                        <h1 className="text-green-500 text-xl">Back</h1>
                    </div>
                </Link>
                <div className="px-4 py-4 text-green-500">
                    <h1 className="font-semibold text-2xl lg:text-3xl mb-2">{oneData.title}</h1>
                    <img className="w-full h-100 object-cover" src={oneData.url === "" ? "https://drive.google.com/uc?export=view&id=1cxd6i4Tkj37e4mIl0YYze5K68MFEqx8s" : oneData.url} alt=""/>
                    
                    <div className="flex mt-3 items-center justify justify-between">
                        <div className="flex">
                            <svg name="love" onClick={() =>{ toast.success("Added to favorites"); favorites(oneData.thumbnailUrl);}} className={`cursor-pointer h-6 w-6 focus:outline-none hover:text-pink-600`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                            <h1 className="ml-2">Add to favorites</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

 // this function only runs on the server by Next.js
 export async function getServerSideProps(params) {
     const paramsid = params.query.id;
    return {
      props: {paramsid}, // will be passed to the page component as props
    }
  }

export default detail;