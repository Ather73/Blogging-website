import './header.css'

export default function Header() {
    return (
        <div className="header">
           <div className="headertitles">
               <span className="headertitlesm"> React & Node</span>
               <span className="headertitllg">Blog</span>
           </div>
           <img className="headerimg" src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}
