import React, {useState} from 'react';
import './App.css';

import {Accordion, AccordionToggle, Card, AccordionCollapse} from 'react-bootstrap'

// Functions import
import {sendContactMessage} from './functions/requests';

// Images import
import galaxyBrainImg from './assets/galaxy-brain.jpg';
import gitHubImg from './assets/GitHub-Mark-Light-32px.png';
import gravsimGif from './assets/gravsim.gif';
import hydroHomiesImg from './assets/Hydro-Homies-Logo.png';
import QDS2020Img from './assets/img_city.png';
import linkedInImg from './assets/LI-In-Bug.png';
import outOfLineImg from './assets/out-of-line-logo.png';
import profileImg from './assets/profile.png';

const App = () => {
  const [email_address, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [errorState, setErrorState] = useState(false);

  // Function that handles submission of a contact message on the frontend
  const handleContactSubmit = async () => {
      setConfirmed(true);
      setErrorState(false);

      console.log(email_address);
      console.log(message);

      if (email_address === "" || message === "") {
        setErrorState(true);
        return;
      }
      
      const payload = {email_address: email_address, message: message};

      try {
        let res = sendContactMessage(payload);
        console.log(res);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="App">
      <header className="App-header bg-light">
        {/* <div className="navbar navbar-dark bg-dark">
          <h3>My Site</h3>
        </div> */}
      </header>

      <main role="main">
        <section className="jumbotron text-center jumbotron-image header-background">
          <div className="container text-light">
            <h1>Janelle Kwok</h1>

            <img src={profileImg} alt="profile image" className="rounded-circle" width="200" height="200"/>

            <p className="lead">
              Hi! I'm a second year student studying at the British Columbia Institute of Technology in their Computer Systems Technology program. 
              I was recently admitted into their cloud computing option. Pleased to meet you. This is a curation of my work!
            </p>
            <a href="https://github.com/jkcadee" style={{marginRight:"1em"}}><img src={gitHubImg}/></a>
            <a href="https://www.linkedin.com/in/jan-kwok/" style={{marginLeft:"0.5em"}}><img src={linkedInImg} height="32px" width="40px"/></a>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="card-deck">
            <div className="col-md-14">
                <Accordion>
                <AccordionToggle as={Card} eventKey="0" className="mb-4 Accordion">

                    <img src={galaxyBrainImg} alt="galaxy brain" className="card-img-top"></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">
                          Galaxy Brain
                        </h5>
                
                        <AccordionCollapse eventKey="0">
                          <div>
                          <h6>October 2020</h6>
                          <p className="text-left">A 12 hour/one day project. This project was created for the Dubhacks 2020 hackathon. I worked in a group of two to create a project that helped workers regulate their work and break time.
                          <br/> <br/>
                          The project's front-end was built on React and is hosted and served through a pipeline on AWS. The site also allows you to change both your work and break time in accordance with your actual work schedule.
                          </p>
                          <a href="https://github.com/Cragzu/galaxy-brain" style={{marginRight: "10px"}}>GitHub Link</a> 
                          <a href="http://galaxy-brain-dubhacks.s3-website-us-east-1.amazonaws.com/" style={{marginLeft: "10px"}}>Site Link</a>
                          </div>
                            
                        </AccordionCollapse>
                    </div>
                    
                  </AccordionToggle>
                  </Accordion>
                </div>

              
            <div className="col-md-5">
                <Accordion>
                <AccordionToggle as={Card} eventKey="0" className="mb-4 Accordion">

                    <img src={outOfLineImg} alt="out of line" className="card-img-top"></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">
                          Out-Of-Line
                        </h5>
                
                        <AccordionCollapse eventKey="0">
                          <div>
                          <h6>May 2020</h6>
                          <p className="text-left">A 5 week project. I was placed in a group of randomized pairs and prompted to create a project that helped solved the issues that came along with the COVID-19 quarantine.
                          <br/> <br/>
                          This project was created to help it's users queue virtually into lines to prevent the spread of COVID-19 when waiting to get essential supplies.
                          </p>
                          <a href="https://github.com/seungho0106/COMP-2800-Team-DTC-05-Out-Of-Line" >GitHub Link</a>
                          </div>
                        </AccordionCollapse>
                    </div>
                    
                  </AccordionToggle>
                  </Accordion>
                </div>
              
                <div className="col-md-7">
                <Accordion>
                <AccordionToggle as={Card} eventKey="0" className="mb-4 Accordion">

                    <img src={gravsimGif} alt="gravsim gif" className="card-img-top"></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">
                          GRAVSIM-19
                        </h5>
                
                        <AccordionCollapse eventKey="0">
                          <div>
                          <h6>April 2020</h6>
                          <p className="text-left">A 12-hour/one day hackathon project. Done as the final assessment for COMP 2522 Object Oriented Programming 1 at BCIT.
                          <br/> <br/> This project is a space gravity simulator game, allowing users to spawn planets or stars and attempt to collect coins to increase their score.
                          </p>
                          <a href="https://github.com/Cragzu/gravsim-19" >GitHub Link</a>
                          </div>
                            
                        </AccordionCollapse>
                    </div>
                    
                  </AccordionToggle>
                  </Accordion>
                </div>
             
               

                <div className="col-md-4">
                <Accordion>
                <AccordionToggle as={Card} eventKey="0" className="mb-4 Accordion">

                    <img src={QDS2020Img} alt="city image" className="card-img-top"></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">
                          QDS 2020 Project
                        </h5>
                
                        <AccordionCollapse eventKey="0">
                          <div>
                          <h6>Jan 2020</h6>
                          <p className="text-left">A two day hackathon project. As a requirement because of co-op placement, I attended the annual QDS hackathon and was placed into a randomized team.
                          <br/> <br/> Our main goal was finding a way to manipulate a large amount of data, and we chose to create an application that scores districts of Vancouver. 
                          Each score based on how desireable a living space each district was depending on personal needs.
                          </p>
                          <a href="https://github.com/clintonbf/QDS_2020" >GitHub Link</a>
                          </div>
                            
                        </AccordionCollapse>
                    </div>
                    
                  </AccordionToggle>
                  </Accordion>
                </div>

              

                <div className="col-md-8">
                <Accordion>
                <AccordionToggle as={Card} eventKey="0" className="mb-4 Accordion">

                    <img src={hydroHomiesImg} alt="hydro homies" className="card-img-top"></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">
                          HydroTracker
                        </h5>
                
                        <AccordionCollapse eventKey="0">
                          <div>
                          <h6>Sept 2019 - Dec 2019</h6>
                          <p className="text-left">A 4 month/term-long project. This was part of COMP 1800 Projects 1 during the first term of CST. 
                          <br/> <br/> We were placed into randomized teams and were prompted to create a project that solved some kind of modern problem.
                          This site tracks the amount of water consumed as inputted by the user. This helped them ensure they are properly hydrated.
                          </p>
                          <a href="https://github.com/jogeyfrangus/VelvetThunder" >GitHub Link</a>
                          </div>
                        </AccordionCollapse>
                    </div>
                    
                  </AccordionToggle>
                  </Accordion>
                </div>

            </div>
          </div>

          <div className="container">
            <hr />
            <h5>Say something to me!</h5>
            <div className="col-md-12">
            <form>
              <div className="form-group row">
                <div className="col-md-12">
                  <input type="email" placeholder="Email address" className="form-control" onChange={e => setEmailAddress(e.target.value)}></input>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <textarea placeholder="Enter text here..." className="form-control" onChange={e => setMessage(e.target.value)}></textarea>
                </div>
              </div>

              {errorState ? 
              (
                <div>
                  <div className="col-md-12 ml-auto text-danger">
                    <p>Error! Please enter something</p>
                  </div>
                </div>
              )
              : null}
              
              <div className="form-group row">
                <div className="col-md-2 ml-auto">
                  <input type="button" className={confirmed ? `btn btn-primary disabled` : "btn btn-primary"} value="Send Message" onClick={() => handleContactSubmit()}></input>
                </div>
              </div>
            </form>
            </div>
            
              
        </div>
        </div>

      </main>
      
      <footer className="container" style={{paddingTop: "1rem"}}>
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
     
    </div>
  );
}

export default App;
