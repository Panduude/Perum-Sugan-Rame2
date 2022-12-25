import React from 'react'
import Topbar from '../../components/Topbar'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import ListBerita from '../../components/ListBerita'
import "../../style.css"


const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Main/>
        <ListBerita/>
        <Footer/>
    </div>
  )
}

export default Home
