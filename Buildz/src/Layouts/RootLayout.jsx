import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const RootContext = createContext({});
function RootLayout() {
  const [mobileMenuView, setMobileMenuView] = useState();
  return (
    <RootContext.Provider value={{ mobileMenuView, setMobileMenuView }}>
   <Outlet/>
    </RootContext.Provider>
  );
}

export default RootLayout;
