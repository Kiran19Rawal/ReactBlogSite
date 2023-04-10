import React, { useContext } from 'react';
import Home from './pages/Home/Home';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={user?<Home />:<Register />} />
      <Route path="/login" element={user?<Home />:<Login />} />
      <Route path="/write" element={user?<Write />:<Register />} />
      <Route path="/settings"element={user?<Settings />:<Register />} />
      <Route path="/post/:postId" element={<Single />} />
      
     </Routes>
    </BrowserRouter>
  );
}

export default App;
