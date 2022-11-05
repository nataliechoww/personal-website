import React from 'react'
import {Link} from "react-router-dom";
import '../styles/Home.css';
import homeProfile from '../images/homeProfile.JPG';
function Home() {
  return (
<>
<div class="header">
  <img src={homeProfile} id = "homeProfile" />
   <div class= "hello"> 
    <h1> Hello there, it's Natalie! </h1>
   </div>
   <div class="aboutMeParagraph">
      <p> I am a freshman at Rutgers University studying computer science. Learn more about my interests, hobbies, and skills!</p><br></br>
      <button class="aboutMeButton"> <Link to ="/about">About Me</Link> </button>
   </div>  
</div>

<div class = "aboutMe"> 
    <div class = "aboutMeContent"> 
      <p> Insert Description Here </p>
    </div>
</div>

<h1 class = "secondSectionHeader"> Selected Projects </h1>
<div class = "secondSection">
  <div class="container1">
    <div class="content1">
      <p> Coding Projects </p> 
    </div> 
  </div>  
</div>

  <div class="container2">
    <div class="content2">
      <p> Art </p>
   </div>
  </div>

  <div class="container3">
    <div class="content3"> 
      <p> Music </p>
    </div>
</div>


<div class = "contactInfo">
<h2> LOOKING FOR MY CONTACT? </h2>
    <button class = "contactButton"> Email Me </button><br></br><br></br>
    <button class = "youtubeButton"> Y </button> 
    <button class = "gitHubButton"> G </button>
</div> 
</>

);
}

export default Home;
