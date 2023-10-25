import React, { useState, useContext, Children } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenu, setIsSubmenuOpen] = useState(true);

  function openSidebar() {
    setIsSidebarOpen(true);
    console.log('clicked');
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
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
