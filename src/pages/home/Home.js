import Header from '../../Component/Header/Header';
import Posts from '../../Component/posts/Posts';
import Sidebar from '../../Component/sidebar/Sidebar';
import './home.css';    


export default function Home() {
    return (
        <> 
        <Header/>
        <div className="home">
           <Posts/>
           <Sidebar/> 
        </div>
        </>
    )
}
