import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {isSidebarOpen,isSubmenu,openSidebar,closeSidebar,openSubmenu,closeSubmenu}=useGlobalContext()
  return <>
  <nav>
    <div className='nav-center'>
    <div className='nav-header'>
      <img src={logo} alt='strip' className='nav-logo'></img>
      <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
    </div>

    </div>
  </nav>
  
  
  </>
}

export default Navbar
