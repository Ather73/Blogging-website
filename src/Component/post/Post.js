import './post.css';

export default function Post() {
    return (
        <div className="post">
            
            <img className="postimg" src="./pictures/bloggingblog.jpg" alt="" />
            
            <div className="postinfo">
                <div className="postcasts">
                    <span className="postcat">Music</span>
                    <span className="postcat">Life</span>
                </div>
                <span className="posttitle">
                    Lorem ipsum dolor fugit doloribus aliquid.

                </span>
                <hr/>
                <span className="postdate">
                    1 hours Ago
                </span>

            </div>
            <p className="postdesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nesciunt hic quo, eos laudantium nobis voluptas optio assumenda 
                doloremque omnis modi iure aliquid blanditiis minima? Est a earum
                 nesciunt maxime. Ab! 
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nesciunt hic quo, eos laudantium nobis voluptas optio assumenda 
                doloremque omnis modi iure aliquid blanditiis minima? Est a earum
                 nesciunt maxime. Ab!
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Nesciunt hic quo, eos laudantium nobis voluptas optio assumenda 
                doloremque omnis modi iure aliquid blanditiis minima? Est a earum
                 nesciunt maxime. Ab!</p>
        </div>
    )
}
