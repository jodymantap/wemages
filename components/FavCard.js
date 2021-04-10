import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';
import CardLoading from './CardLoading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FavCard(thumbnail) {
    const [datadata, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false); 
    useEffect(() => {
        if (localStorage.getItem("fav") !== null) {
        setData(localStorage.getItem("fav").replace("null, ", "").split(", "))
        setLoading(false);
        } else {
            setNoData(true);
            setLoading(false);
        }
    }, [])

    const unfavorites = (datum) => {
        localStorage.setItem("fav", localStorage.getItem("fav").replace(datum + ", ", ""))
    }
       
    return (
        <div className="flex flex-wrap">
            {noData ? 
                <div className="text-xl mx-auto font-bold text-green-600 mt-5">No Favorite Images</div>
            :null}
            {Loading ? <CardLoading/> : (
            <div className="flex flex-wrap justify-between">
            {datadata && datadata.map((datum) => { return( 
            <div key={datum.id} className="bg-white shadow-md mx-5 my-5 rounded-lg lg:w-1/5 md:w-1/4 sm:w-1/3 w-full">
                <div className="px-4 py-4 text-green-500">
                    <img className="w-full h-52 object-cover cursor-pointer hover:opacity-50" src={datum === "" ? "https://drive.google.com/uc?export=view&id=1cxd6i4Tkj37e4mIl0YYze5K68MFEqx8s" : datum} alt=""/>
                    <div className="flex mt-3 items-center justify justify-between">
                        <div className="flex">
                            <svg name="love" onClick={() =>{ toast.success("Removed from favorites!"); unfavorites(datum) }} className={`cursor-pointer h-6 w-6 focus:outline-none love-btn text-pink-500 hover:text-green-600`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </div>
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

export default FavCard;