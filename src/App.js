import React from 'react';
import './App.css';

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
            <h1>My Name</h1>

            <img src="profile.png" className="rounded-circle" width="200" height="200"/>

            <p className="lead text-muted">
              Hi! I'm a CST student currently on their co-op term. <br/>
              Pleased to meet you.
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="card-deck">
              
              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <img src="profile.png" className="card-img-top"></img>
                  <div className="card-body">
                      <h5 className="card-title">
                        Project One
                      </h5>
                      <p className="card-text">
                        My first project!
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                <img src="profile.png" className="card-img-top"></img>
                  <div className="card-body">
                  <h5 className="card-title">
                        Project Two
                      </h5>
                      <p className="card-text">
                        My second project!
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                <img src="profile.png" className="card-img-top"></img>
                  <div className="card-body">
                  <h5 className="card-title">
                        Project Three
                      </h5>
                      <p className="card-text">
                        My third project!
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                <img src="profile.png" className="card-img-top"></img>
                  <div className="card-body">
                  <h5 className="card-title">
                        Project Four
                      </h5>
                      <p className="card-text">
                        My fourth project!
                      </p>
                  </div>
                </div>
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
