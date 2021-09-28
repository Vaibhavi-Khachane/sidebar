import React, { useState } from "react";
import "./sidebar.css";
import {
  RiArticleLine,
  RiDashboardLine,
  RiGroupLine,
  RiLogoutBoxLine,
  RiSettings4Line,
} from "react-icons/ri";
import {
  FaClipboardCheck,
  FaRegEye,
  FaRegLightbulb,
  FaTicketAlt,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import patona from "./patona.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const siderbarCollapse = localStorage.getItem('sidebar-collapsed');
    const[showLink, setShowLink] = useState(siderbarCollapse ? false: true);

     const handleToggler = ()=>{
        if(showLink) {
            setShowLink(false);
            localStorage.setItem('sidebar-collapsed', true);
            return;
        }
        setShowLink(true);
        localStorage.removeItem('sidebar-collapsed');
    }

  return (
    <>
      
      <div className={showLink ? "sidebar " : "sidebar mobile"}>

      <div className="sidebar-header">
        <GiHamburgerMenu
          size="2em"
          className="sidebar-text"
          onClick={handleToggler}
          color="#616372"
        />
      </div>

        <div className="sidebar-hearder">
          <img className="logo1" src={patona} alt="logo" />
          <p className="sidebar-name sidebar-text1">Patona</p>
        </div>
        <div className="sidebar-items">
          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/dashboard'>
            <RiDashboardLine className="sidebar-text" />
            
              <span className="sidebar-text1">Dashboard</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/overview'>
            <FaRegEye className="sidebar-text" />
            
              <span className="sidebar-text1">Overview</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/tickets'>
            <FaTicketAlt className="sidebar-text" />
            
              <span className="sidebar-text1">Tickets</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/ideas'>
            <FaRegLightbulb className="sidebar-text" />
           
              <span className="sidebar-text1">Ideas</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/contacts'>
            <RiGroupLine className="sidebar-text" />
           
              <span className="sidebar-text1">Contacts</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/agent'>
            <GoPerson className="sidebar-text" />
            
              <span className="sidebar-text1">Agent</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/articals'>
            <RiArticleLine className="sidebar-text" />
            
              <span className="sidebar-text1">Articals</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/subscription'>
            <FaClipboardCheck className="sidebar-text" />
              <span className="sidebar-text1">Subscriptions</span>
            </Link>
          </div>

          <div>
          <hr style={{ borderColor: "#6A7B92"}}/>
          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/settings'>
            <RiSettings4Line className="sidebar-text" />
        
              <span className="sidebar-text1">Settings</span>
            </Link>
          </div>

          <div className="items">
          <Link style={{ textDecoration: "none" }} to='/logout'>
            <RiLogoutBoxLine className="sidebar-text" />
            
              <span className="sidebar-text1">Logout</span>
            </Link>
          </div>
          </div>
        </div>
       

       
        </div>
      
    </>
  );
};
export default Sidebar;
