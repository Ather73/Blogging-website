import Sidebar from '../../Component/sidebar/Sidebar';
import './setting.css';

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">
                        Update Your account
                    </span>
                    <span className="settingDeleteTitle">
                        Delete Account
                    </span>
                 </div>
                   <form className="settingForm">
                       <label> Profile Picture</label>
                       <div className="settingPP">
                           <img src="pictures/istockphoto4.jpg" alt="" />
                           <label htmlFor="fileInput">
                           <i className=" settingPPIcon far fa-user-circle"></i>
                           </label>
                           <input type="file" id="finalInput" style={{display:"none"}}/>
                       </div>
                       <label> Username</label>
                       <input type="text" placeholder="Safak" />
                       <label> Email</label>
                       <input type="email" placeholder="Safak" />
                       <label> Password</label>
                       <input type="password" />
                       <button className="settingSubmit">
                           Update 
                       </button>
                   </form>

 
            </div>
            <Sidebar/>
        </div>
    )
}
 