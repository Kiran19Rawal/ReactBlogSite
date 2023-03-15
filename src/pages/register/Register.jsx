import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
     <form className="registerForm">
     <label>Username</label>
     <input className="registerInput" type="text" placeholder="Enter your username..."></input>
     <label>Email</label>
     <input className="registerInput" type="text" placeholder="Enter your email..."></input>
     <label>Password</label>
     <input className="registerInput" type="password" placeholder="Enter yout password.."></input>
     <button className="registerButton">Register</button>
     </form>
     <button className="registerLoginButton">
      <Link className="link" to="/login">Login</Link>
     </button>
    </div>
  )
}
