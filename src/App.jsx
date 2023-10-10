import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/scrollbar'

function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

