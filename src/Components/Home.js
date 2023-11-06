import React from "react";
import vg from "../assets/Two.jpg"
import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
    <>
        <div className="home" id="home">
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
           <img src={vg} alt="Graphics" height= "300px"/>
           <div>
            <p>
                We are your one and only solution to the tech 
                problems you face everyday.
                We are loading tech company whose aim is to increase
                the problem solving ability in children.
                
            </p>
           </div>
        </div>

        <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>
                A lot has been written about the IoT revolution and how the technology has the capability to revolutionize industries, 
                transform productivity and unlock new levels of insight.
                But, for those intrigued by the possibilities and looking to dip their toe in the water, 
                the potential myths of high price point, infrastructure and connectivity challenges, as well as the required skill set, 
                can be significant hurdles that seem insurmountable.Web development refers to the overall process of creating websites 
                or web applications, including the
                project's design, layout, coding, content ...
                </p>
            </div>
        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s"
                    }}>
                      <AiFillGoogleCircle />
                      <p>Google</p>
                    </div>
                    
                    <div style={{
                        animationDelay: "0.5s"
                    }}>
                      <AiFillAmazonCircle />
                      <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay: "0.7s"
                    }}>
                      <AiFillYoutube />
                      <p>YouTube</p>
                    </div>

                    <div style={{
                        animationDelay: "1s"
                    }}>
                      <AiFillInstagram />
                      <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
       
    )
};

export default Home;