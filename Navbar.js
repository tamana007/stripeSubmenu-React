import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  // const {isSidebarOpen,isSubmenu,openSidebar,closeSidebar,openSubmenu,closeSubmenu,setIsSidebarOpen}=useGlobalContext()
  // console.log(typeof(openSidebar));
  const { openSidebar, openSubmenu, closeSubmenu,location } = useGlobalContext();

  
  function showSubmenu(e) {
    const page=e.target.textContent;
    const tempBtn=e.target.getBoundingClientRect();
    const center=(tempBtn.right+tempBtn.left)/2;
    const bottom=(tempBtn.bottom-3)
    console.log("hi");
    openSubmenu(page,{center,bottom});
  }
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="strip" className="nav-logo"></img>
            {/* <button className='btn toggle-btn' onClick={closeSidebar} ><FaBars/></button>
             */}

            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button
                className="link-btn"
                onMouseOver={showSubmenu}
                // onClick={()=> console.log("hellow world")}
              >
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={showSubmenu}>
              developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={showSubmenu}>
              company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn" onMouseOver={showSubmenu}>
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
