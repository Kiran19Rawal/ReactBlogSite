import "./singlePost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
       <img 
        className="singlePostImg"
        src="https://images.pexels.com/photos/14641908/pexels-photo-14641908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
       />
       <h1 className="singlePostTitle">
       lorem ipsum dolor sit amet.
       <div className="singlePostEdit">
       <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
       <i className="singlePostIcon fa-solid fa-trash"></i>
       </div>
       </h1>
       <div className="singlePostInfo">
        <span className="singlePostAuthor">Author:<b>Kiran</b></span>
        <span className="singlePostDate">1 hour ago</span>
       </div>
       <p className="singlePostDesc">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
       esse cillum dolore eu fugiat nulla pariatur.

       Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       officia deserunt mollit anim id est laborum.

       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
       esse cillum dolore eu fugiat nulla pariatur.
       
       Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       officia deserunt mollit anim id est laborum.
       </p>
        </div>
    </div>
  )
}

