import "./sidebar.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
  const getCats = async ()=>{
    const res = await axios.get("/categories");
    setCats(res.data);
  };
  getCats();
  },[]);
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
     <span className="sidebarTitle">
    ABOUT ME
     </span>
     <img
    src="https://images.pexels.com/photos/13870795/pexels-photo-13870795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt=""
/>
<p>Sed ut perspiciatis unde omnis iste natus
 error sit voluptatem accusantium doloremque 
 laudantium,totam rem aperiam, eaque ipsa ab 
 illo inventore veritatis et quas. </p>
     </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
   { cats.map((c)=>(
    <Link to={`/?cat=${c.name}`}className="link">
    <li className="sidebarListItems">{c.name}</li>
    </Link>
      
    ))}
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i> 
      <i className="sidebarIcon  fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    </div>
    </div>
    </div>
  )
}
