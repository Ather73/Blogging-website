import { Link } from 'react-router-dom';
import './topbar.css';

export default function Topbar() {

    const user = false;

    return (
        <div className='top'>
            <div className='topleft'>
            <i className="topicon fab fa-facebook-square"></i>
            <i className="topicon fab fa-twitter-square"></i>
            <i className="topicon fab fa-pinterest-square"></i>
            <i className="topicon fab fa-instagram-square"></i>
            </div>
            <div className='topcenter'>
                <ul className="toplist">
                    <li className="toplistitem">
                        <Link className="link" to = "/">HOME</Link>
                        
                    </li>
                    <li className="toplistitem"> <Link className="link" to = "/">ABOUT</Link></li>
                    <li className="toplistitem"><Link className="link" to = "/">CONTACT</Link></li>
                    <li className="toplistitem"><Link className="link" to = "/">WRITE</Link></li>
                    <li className="toplistitem">
                        {  user && 'LOGOUT' }
                    </li>
                </ul>
            </div>
            <div className='topright'>
                {
                    user ? (
                        <img className='topimg' src="https://images.pexels.com/photos/3277299/pexels-photo-3277299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

                    ) : (
                        
                        <ul className="toplist">
                          <li className="toplistitem">
                        <Link className ="link" to ="/Login">
                             LOGIN
                         </Link>
                         </li>

                         <li className="toplistitem">
                        <Link className ="link" to ="/Register">
                             REGISTER
                         </Link>
                         </li> 
                        
                        </ul>
                        )}
                
               
                <i className="topsearchicon fas fa-search"></i>
            </div>
        </div>
    )
}
