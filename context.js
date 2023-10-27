import React, { useState, useContext, children } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenu, setIsSubmenuOpen] = useState(false);
  const [location,setLocation]=useState({})
  const [page,setPage]=useState({page:'',links:[]})

  function openSidebar() {
    setIsSidebarOpen(true);
    console.log('clicked');
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
    console.log('closed');
  }
  //for subMenu
  function openSubmenu(text,coordinates) {
    const page=sublinks.find((link)=>link.page===text)
    setPage(page);
    console.log('opened');
    setLocation(coordinates)
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  console.log('hello love');

    setIsSubmenuOpen(false);
    console.log('CLOSE FROM HERE');
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenu,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
