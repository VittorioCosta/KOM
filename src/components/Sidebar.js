import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";
import logo from '../assets/image/logo.png';
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container">
          <Link 
            to="/" 
            className="nav-brand"
            onClick={closeSidebar}
          >
            <img src={logo} alt='logo'/>
          </Link>
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
