import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import Routes from './Routes';
import ExRend from './views/ExRend';
import SearchBar from './views/SearchBar';
import Accordion from './views/Accordion';

const browserHistory = createBrowserHistory();


function App() {
  return (
    <div>
      <div className="App">
        <header className='App-header' align="left">
          <div style={{display:"inline-flex"}}>
          <div>
          <img src={require("./logo1.png")}  alt="esi" height="70px"/>
          </div>
          <div style={{paddingLeft:"1050px",fontSize:"15px", display:"flex"}}>
          <img src={require("./resource.png")}  alt="esi" width="50px"
           height="26px"
           style={{paddingTop:"14px", height:"30px"}}
           />
            <p>Welcome User
            </p>
           
          </div>
          </div>
        </header>
        <br /><br/>
      </div>
      {/* <Home /> */}
      <Router history={browserHistory}>
        <Routes />
      </Router>
      <Home history={browserHistory} />
      {/* <ExRend/>
      <SearchBar/> */}
      {/* <Accordion/> */}

    
    </div>
  );
}

export default App;
