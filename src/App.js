import Topbar from "./Component/topbar/Topbar";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";



function App(){
    const user = true;

    return(
        <Router>
          <Topbar/>
             <Switch>
         <Route exact path ="/">
            <Home/>
         </Route>

         <Route path ="/register">{ user ? <Register/> : <Register/>} </Route>        
         <Route path ="/login">{ user ? <Login/> :<Login/> } </Route>      
         <Route path ="/write">{ user ? <Register/>:<Register/> } </Route>
         <Route path ="/setting">{ user ?  <setting/> :<Register/> }</Route>
    

         <Route path ="/post/:postId">
            <Single/>
         </Route>

     </Switch>
     </Router>

        
     
    );
}
export default App;