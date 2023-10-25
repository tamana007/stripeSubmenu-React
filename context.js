import React, { useState, useContext, children } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenu, setIsSubmenuOpen] = useState(true);

  function openSidebar() {
    setIsSidebarOpen(true);
    console.log('clicked');
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
    console.log('closed');
  }
  //for subMenu
  function openSubmenu() {
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
