import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const {
    isSubmenu,
    openSubmenu,
    closeSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [coloumn, setCouloumn] = useState("col-2");

  useEffect(() => {
    setCouloumn("col-2");
    if (links.length === 3) {
      setCouloumn("col-3");
    }
    if (links.length > 3) {
      setCouloumn("col-4");
    }
    const { center, bottom } = location;
    const subMenu = container.current;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
  }, [location,links]);

  return (
    <>
      <aside
        ref={container}
        className={`${isSubmenu ? "submenu show" : "submenu"}`}
      >
        {/* {sublinks.map((link,index)=>{
const {label,url}=link;
      return <div className='submenu-center'><a href={url} key={index}>{label}</a></div>
    })} */}
        {
          <h4>
            {/* <div> */}
            {page}
            <div className={`submenu-center ${coloumn}`}>
              {links.map((item, index) => {
                const { label, icon, url } = item;
                return (
                  <a key={index} href={url}>
                    {icon}
                    {label}
                  </a>
                );
              })}
            </div>
            {/* </div> */}
          </h4>
          
        }
      </aside>
    </>
  );
};

export default Submenu;
