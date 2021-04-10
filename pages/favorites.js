import FavCard from "../components/FavCard";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Favorites() {
    return (
        <div>
            <Navbar active="bg-green-600 text-white"/>
            <ToastContainer/>
            <FavCard/>
        </div>
    )
}

export default Favorites
