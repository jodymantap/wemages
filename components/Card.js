import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';
import CardLoading from './CardLoading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card(thumbnail) {
    const [datadata, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(
        `https://jsonplaceholder.typicode.com/albums/1/photos`
        )
        .then(response => {
            setData(response.data);
            console.log("Response", response.data[1])
            localStorage.setItem("datalength", response.data.length);
            setLoading(false);
        })
    }, [])

    const favorites = (url) => {
        localStorage.setItem("fav", localStorage.getItem("fav") + ", " + url)
    }
       
    return (
        <div className="flex flex-wrap">
            {Loading ? <CardLoading/> : (
            <div className="flex flex-wrap justify-between">
            {datadata.map((datum) => { return( 
            <div key={datum.id} className="bg-white shadow-md mx-5 my-5 rounded-lg lg:w-1/5 md:w-1/4 sm:w-1/3 w-full">
                <div className="px-4 py-4 text-green-500">
                    <Link href={{
                                pathname: "/detail",
                                query: { id: datum.id },
                            }}>
                    <img className="w-full h-52 object-cover cursor-pointer hover:opacity-50" src={datum.thumbnailUrl === "" ? "https://drive.google.com/uc?export=view&id=1cxd6i4Tkj37e4mIl0YYze5K68MFEqx8s" : datum.thumbnailUrl} alt=""/>
                    </Link>
                    <div className="flex mt-3 items-center justify justify-between">
                        <div className="flex">
                            <svg name="love" onClick={() =>{ toast.success("Added to favorites!"); favorites(datum.url) }} className={`cursor-pointer h-6 w-6 focus:outline-none love-btn hover:text-pink-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        {/* <div className={`${isClicked && datum.id === isShared ? "hidden" : "flex"} items-center`}>
                            <Link href={{
                                pathname: "/detail",
                                query: { id: datum.id },
                            }}>
                                <h1 className="cursor-pointer"><em>Details<span className="text-2xl">&#8594;</span></em></h1>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
               )
            })
          }
          </div>
          )}
        </div>
    )
}

export default Card;