import React from 'react';
import './App.css';

import {Accordion, AccordionToggle, Card, AccordionCollapse} from 'react-bootstrap'

function App() {


  return (
    <div className="App">
      <header className="App-header bg-light">
        {/* <div className="navbar navbar-dark bg-dark">
          <h3>My Site</h3>
        </div> */}
      </header>

      <main role="main">
        <section className="jumbotron text-center" style={{margin:"0"}}>
          <div className="container">
            <h1>Janelle Kwok</h1>

            <img src="profile.png" className="rounded-circle" width="200" height="200"/>

            <p className="lead text-muted">
              Hi! I'm a co-op student studying at the British Columbia Institute of Technology in their Computer Systems Technology diploma. <br/>
              Pleased to meet you. This is a curation of my work!
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="card-deck">
              
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
                          <p className="text-left">A one day hackathon project. Done as the final assessment for COMP 2522 Object Oriented Programming 1 at BCIT.
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
                          <p className="text-left">A two day hackathon project. As a requirement because of co-op placement, I attended the annual QDS hackathon and was placed into a randomized team.
                          <br/> <br/> Our main goal was finding a way to manipulate a large amount of data, and we chose a Vancouver district scoring system. 
                          This was based on how desireable a living space each district was depending on personal needs.
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
                          <p className="text-left">A 4 month/term-long project. This was part of COMP 1800 or Projects 1 during the first term of CST. 
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
