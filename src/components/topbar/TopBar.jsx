
import { Link } from "react-router-dom";
import "./topbar.css";
export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i> 
      <i className="topIcon  fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      </div>
      <div className="topCenter"> 
       <ul className="topList">
        <li className="topListItem">
        <Link className="link" to="/">HOME</Link>
        </li>
        <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
        <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
        <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
        <li className="topListItem">{user && "LOGOUT"}</li>
       </ul>
      </div>
      <div className="topRight">
      {user ? (
          <img 
        className= "topImg" 
        src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" />
        ) : (
          <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
          </ul>
        )}
       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
