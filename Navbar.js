import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  // const {isSidebarOpen,isSubmenu,openSidebar,closeSidebar,openSubmenu,closeSubmenu,setIsSidebarOpen}=useGlobalContext()
  // console.log(typeof(openSidebar));
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  console.log(openSidebar);
  return <>
  <nav>
    <div className='nav-center'>
    <div className='nav-header'>
      <img src={logo} alt='strip' className='nav-logo'></img>
      {/* <button className='btn toggle-btn' onClick={closeSidebar} ><FaBars/></button>
       */}

<button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
      
    </div>
    <ul className='nav-links'>
      <li>
        <button className='link-btn'>products</button>
      </li>
      <li>
        <button className='link-btn'>Developers</button>
      </li>

    </ul>
    <button className='btn signin-btn'>Sign In</button>

    </div>
  </nav>
  
  
  </>
}

export default Navbar
