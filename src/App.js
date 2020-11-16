import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

import {Accordion, AccordionToggle, Card, AccordionCollapse} from 'react-bootstrap'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
} 

function App() {
  const [email_address, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleSubmit = () => {
      setConfirmed(true);
      setErrorState(false);

      console.log(email_address);
      console.log(message);

      if (email_address === "" || message === "") {
        setErrorState(true);
        return;
      }
      
      axios.post('https://301bmpbe8a.execute-api.us-east-1.amazonaws.com/Test/contact_email_resource', {
          "email_address": email_address,
          "message": message
      }, headers)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(res => {
        console.error(res);
      })
  }

  return (
    <div className="App">
      <header className="App-header bg-light">
        {/* <div className="navbar navbar-dark bg-dark">
          <h3>My Site</h3>
        </div> */}
      </header>

      <main role="main">
        <section className="jumbotron text-center jumbotron-image" style={{margin:"0", backgroundImage: `url(${"VV_WatercolorStainedPaper_01.jpg"})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundAttachment: "scroll"}}>
          <div className="container text-light">
            <h1>Janelle Kwok</h1>

            <img src="profile.png" className="rounded-circle" width="200" height="200"/>

            <p className="lead">
              Hi! I'm a co-op student studying at the British Columbia Institute of Technology in their Computer Systems Technology program. <br/>
              Pleased to meet you. This is a curation of my work!
            </p>
            <a href="https://github.com/jkcadee" style={{marginRight:"1em"}}><img src="GitHub-Mark-Light-32px.png"/></a>
            <a href="https://www.linkedin.com/in/jan-kwok/" style={{marginLeft:"0.5em"}}><img src="LI-In-Bug.png" height="32px" width="40px"/></a>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="card-deck">
            <div className="col-md-12">
                <Accordion>
                <AccordionToggle as={Card} eventKey="0" className="mb-4 Accordion">

                    <img src="galaxy-brain.jpg" className="card-img-top"></img>
                    
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

                    <img src="out-of-line logo.png" className="card-img-top"></img>
                    
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

                    <img src="gravsim gif.gif" className="card-img-top"></img>
                    
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

                    <img src="img_city.png" className="card-img-top"></img>
                    
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

                    <img src="Hydro Homies Logo.png" className="card-img-top"></img>
                    
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
                  <input type="button" className={confirmed ? `btn btn-primary disabled` : "btn btn-primary"} value="Send Message" onClick={() => handleSubmit()}></input>
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
