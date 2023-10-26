import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
import sublinks from './data';

const Submenu = () => {
  const{isSubmenu,openSubmenu,closeSubmenu,location}=useGlobalContext();
  const container=useRef(null);
 
  useEffect(()=>{
    const {center,bottom}=location;
    const subMenu=container.current;
    subMenu.style.left=`${center}px`;
    subMenu.style.top=`${bottom}px`
    
  
  },[location])

  return <>
  <aside ref={container} className={`${isSubmenu?'submenu show':'submenu'}`}>
    {/* {sublinks.map((link,index)=>{
const {label,url}=link;
      return <div className='submenu-center'><a href={url} key={index}>{label}</a></div>
    })} */}
Submenu
  </aside>
  </>
}

export default Submenu
