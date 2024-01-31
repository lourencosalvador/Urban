import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/Navbar'
import { AnimatePresence } from 'framer-motion'


function App() {
   const location = useLocation()
  return (
    <>
      <NavBar />
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
       <Route index element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
