import React from 'react'
import Header from './Components/Header/Header'
import AboutPage from './page/About/AboutPage'
import Project from './page/Project/Project'
import Testimonal from './page/Testimonal/Testimonal'
import Contact from './Components/Contact/Contact'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <AboutPage/>
      <Project/>
      <Testimonal/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App