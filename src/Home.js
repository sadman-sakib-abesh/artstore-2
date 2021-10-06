import React from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom"



const Home = () => {

useEffect(()=>{
    document.getElementById("about").style.right="0px"
    document.getElementById("about").style.transition="3s"
    
},[])



    return (
        <div>
            

<div id="about" className="about">
  <br/>
  <p><h1> Hi,</h1>
 <h4>I am Abesh MERN stack developer<br/> from Bangladesh <br/>
 email - sadmansakib@claps.ml<br/>
 <a id="a" href="https://github.com/sadman-sakib-abesh"><i class="fa fa-github"></i></a>&nbsp;&nbsp;
 <a id="a"  href="https://www.facebook.com/sadman.sakib.902604/"><i class="fa fa-facebook-square"></i></a>&nbsp;&nbsp;
<a id="a"  href="https://twitter.com/AbeshSakib?s=09&fbclid=IwAR1Bc82uas_P3ddyiKkR8vGWaBXjdEj2GeaiZDiDs_u539CP97S7JzwEJ1o"><i class="fa fa-twitter-square"></i></a></h4></p>
 
</div><br/><br/>

<div className="projects">
<Link to="/Blog" className="blog">&nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;</Link><br/><br/>
<br/>
<div className="sector">
<h2>skills</h2>
1.<a href="https://www.javascript.com/">javascript</a><br/><br/>
2.<a href="https://reactjs.org/">react.js</a><br/><br/>
3.<a href="https://expressjs.com/">express.js</a><br/><br/>
4.<a href="https://www.mongodb.com/">mongodb</a><br/><br/>
</div><br/>
<div className="sector">
<h2>projects</h2>
1.<a href="https://amazon-clone-bp.netlify.app/#/">(amazon clone)-made with react.js ,firebase,stripe</a><br/><br/>
2.<a href="https://instagram-clone-bp.netlify.app/">(instagram clone)-made with react.js ,firebase</a><br/><br/>

3.<a href="https://trial-businesspoint.ml/#/">(businesspoint social)-made with react.js ,noed.js ,express.js, mongodb </a><br/><br/>
4.<a href="https://www.clapsbd.ml/#/">(claps dev store)-made with react.js ,noed.js ,express.js, mongodb </a><br/><br/>
5.<a href="https://artist-smith.netlify.app/">(artist portfolio)-made with react.js </a><br/><br/>

</div>
</div>





        </div>
    );
};

export default Home;