import { HashRouter as Router,Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import './grid.css';
import Home from './Home';
import Blog from './Blog';

const App=() =>{
 
 
//grid animation
useEffect(()=>{
    
  document.getElementById("grid-1").style.top="0px"
  document.getElementById("grid-1").style.transition="3s"
  
  document.getElementById("grid-2").style.top="0px"
  document.getElementById("grid-2").style.transition="3s"
  
  document.getElementById("grid-3").style.left="0px"
  document.getElementById("grid-3").style.transition="3s"
  
  document.getElementById("grid-4").style.left="0px"
  document.getElementById("grid-4").style.transition="3s"
  
  
  
  
  },[])
  //grid animation
 
  return (
 <div className="App">
   <span id="grid-1" className="grid-1"></span>
<span id="grid-2"  className="grid-2"></span>
<span id="grid-3"  className="grid-3"></span>
<span id="grid-4" className="grid-4"></span>
<Router>
<Route exact path="/" component={Home} />
<Route exact path="/Blog" component={Blog} />
</Router>
       </div>
  );
}

export default App;
