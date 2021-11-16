import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="pictures/istockphoto2.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <div className="formgroup">
                    
                <label htmlFor="fileInput">
                <i className=" writeIcon fas fa-plus"></i>
                 
                </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Titles" className="writeInput"
                     autoFocus={true} />                    
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell Your Story......"
                     type="text"
                     className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
                
              </div>
              
            </form>
            
        </div>
    )
}

