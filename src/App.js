import './App.css';
//import ReactDOM from 'react-dom/client';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import React from 'react';

function App() { 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/awards' component={Awards} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
      </div>


  );
  

  

  


  

}
//const root=ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(<App/>);

  export default App;



  







