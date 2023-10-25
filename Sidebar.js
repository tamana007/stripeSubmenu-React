import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'
// import Navbar from './Navbar'

const Sidebar = () => {
  const {isSidebarOpen,openSidebar,closeSidebar}=useGlobalContext();
  console.log(closeSidebar);
  return <>
  <aside className={`${isSidebarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
    <div  className='sidebar'>
      <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      <div className='links-container'>
        {sublinks.map((item,index)=>{
          const {page,links}=item;
          return <article key={index}>
            <h4>{page}</h4>
            <div className='sidebar-sublinks'>
              {links.map((itemm,index)=> {
                const {label,icon,url}=itemm;
                return <a key={index} href='url'>{icon}{label}</a>
              })}
            </div>
          </article>
        })}
      </div>

    </div>
  </aside>
  </>
}

export default Sidebar
