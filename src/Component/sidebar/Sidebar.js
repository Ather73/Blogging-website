import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebaritem">
                <span className="sidebartitle">
                    ABOUT ME
                </span>
                <img className='sidebarimg' src="https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nihil fugiat, deserunt dolorum consequatur quam alias sit praesentium.</p>
            </div>

            <div className="sidebaritem">
                <span className="sidebartitle">
                    CATEGORIES
                </span>
                <ul className="sidebarlist">
            <li className="sidebarlistitem">Life</li>
            <li className="sidebarlistitem">Music</li>
            <li className="sidebarlistitem">Sport</li>
            <li className="sidebarlistitem">Style</li>
            <li className="sidebarlistitem">Tech</li>
            <li className="sidebarlistitem">Cinema</li>
                </ul>
            </div>

            <div className="sidebaritem">
                <span className="sidebartitle">FOLLOW US</span>
                <div className="sidebarsocials">
            <i className="sidebaricon fab fa-facebook-square"></i>
            <i className="sidebaricon fab fa-twitter-square"></i>
            <i className="sidebaricon fab fa-pinterest-square"></i>
            <i className="sidebaricon fab fa-instagram-square"></i>
                </div>
            </div>
            
        </div>
    )
}
