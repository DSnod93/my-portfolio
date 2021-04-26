import React from 'react';

const About = () => (
    <div className="container">
        <h4>About Me</h4>
        <div className="col s12 m3">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="../images/bio-image.jpg" alt="me" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>
                            I am currently a student at UC Berkeley as a Full Stack Web Developer. I create websites using the MERN Stack. I am based out of California.
                  </p>

                    </div>
                    <div className="card-action">
                        <p>
                            BS Kinesiology, San Francisco State University
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default About;