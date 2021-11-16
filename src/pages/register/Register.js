
import { Link } from 'react-router-dom';
import './register.css';  

export default function Register() {
    return (
        <div className="login">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Email..." />

                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter Your Email..." />

                <label> password</label>
                <input type="password" className="registerInput" placeholder="Enter Your Password..." />

                <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton">

                <Link className="link" to ="/login"> Login </Link>
             </button>
            
        </div>
    )
}
    