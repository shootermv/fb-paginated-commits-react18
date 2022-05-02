import { useState } from "react";
import LayoutCtx from "../Contexts/LayoutCtx";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
export default function Layout({ children }) {
  const [menuShown, setMenuShown] = useState(false);
  const toggleMenu = () => setMenuShown(!menuShown);
  return (
    <LayoutCtx.Provider value={{ toggleMenu, menuShown }}>
      <div className="MainWrap">
        <SideNav />
        <div className="App">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </LayoutCtx.Provider>
  );
}
