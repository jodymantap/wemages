import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import Card from '../components/Card';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="font-bold text-blue-600">
      <Navbar/>
      <ToastContainer/>
      <Card thumbnail="datum.thumbnailUrl"/>
    </div>
  )
}
