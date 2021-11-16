import './singlepost.css';

export default function Singlepost() {
    return (
        <div className="singlepost">
        <div className="singlepostWrapper">
             <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="" 
            className="imgpost" />
        
            <h1 className="singleposttitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               
                <div className="singleposredit">
                    <i className=" singleposticon fas fa-user-edit"></i>
                    <i class=" singleposticon fas fa-trash-alt"></i><br /><br />
                    <span className="singlepostdate"> 1 Hour Ago</span>
                </div>
            </h1>
            <div className="singlepostinfo">
                <span className="singlepostauthor">
                <br/>
                <b> Author : Safak </b>
                </span>
               
            </div>
            <p className="singlepostdesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Illum sunt quaerat iusto provident. Natus quod vitae molestias
                quidem deleniti, tempore sapiente dolore. 
                Deserunt dolores harum, nobis quidem qui quisquam tenetur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Illum sunt quaerat iusto provident. Natus quod vitae molestias
                quidem deleniti, tempore sapiente dolore. 
                Deserunt dolores harum, nobis quidem qui quisquam tenetur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                llum sunt quaerat iusto provident. Natus quod vitae molestias
                quidem deleniti, tempore sapiente dolore. 
                Deserunt dolores harum, nobis quidem qui quisquam tenetur?
                
            </p>
        </div>
        
        </div>    
        
    )
}



// import './singlepost.css';

// export default function Singlepost() {
//     return (
//         <div className="singlepost">
//             single posttttt
//         </div>
//     )
// }
