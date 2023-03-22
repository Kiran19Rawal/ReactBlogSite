import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
 <div className="settingsTitile">
    <span className="settingsTitleUpdate">Update Your Account</span>
    <span className="settingsTitleDelete">Delete Account</span>
 </div>
    <form className="settingsForm">
      <label>profile picture</label>
      <div className="settingsPP">
      <img 
        src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        /> 
       <label htmlFor="fileInput">
       <i className="settingsPPIcon fa-regular fa-circle-user"></i>
       </label>
       <input id="fileInput" type="file"  style={{display:"none"}} />
        </div>

      <label>Username</label>
      <input type="text" placeholder="Kiran" />

      <label>Email</label>
      <input type="email" placeholder="kiran@gmail.com" />

      <label>Password</label>
      <input type="password" placeholder="password" name="password" />
     <button className="settingsSubmit">
     Update
     </button>
    </form>
    </div>
    <Sidebar />
    </div>
  );
}
