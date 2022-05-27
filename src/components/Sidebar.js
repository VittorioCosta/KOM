import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";
import logo from '../assets/image/logo.png';
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container">
          <div className="nav-brand">
            <img src={logo} alt='logo'/>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
};

export default Sidebar;
