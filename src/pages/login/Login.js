import { Link } from 'react-router-dom';
import './login.css';  

export default function Login() {
    return (
        <div className="login">
        
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter Your Email..." />

                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter Your Email..." />

                <label> password</label>
                <input type="password" className="loginInput" placeholder="Enter Your Password..." />

                <button className="loginButton">Login</button>
                </form>
                <button className="loginRegisterButton">
            <Link className="link" to ="/Register"> Register </Link>
            </button>
            
        </div>
    )
}
  