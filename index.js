import React from 'react';
import {render} from 'react-dom';
import App from './App';
class Header extends React.Component{
    render() {
        return (
              <div class="p-3 mb-2 bg-dark text-white">
              
                  <div class="row">
                     
                        <div class="col-xs-12 col-md-4 col-xl-4">
                          <center>
                            <h6>dcdennis@rams.colostate.edu</h6>
                          </center>
                         </div>
                        
                      
                        <div class="col-xs-12 col-md-4 col-xl-4">
                          <center>
                          <h4>Devin Dennis</h4>
                          </center>
                        </div>
                        
                      
                        <div class="col-xs-12 col-md-4 col-xl-4">
                          <center>
                          <h6>918-403-9666</h6>
                          </center>
                        </div>
                  
                   </div> 
                  </div>
        )
      }
}
class Education extends React.Component {
  render() {
    return (
     
        <div className="p-3 mb-2 bg-light text-dark">
                
                <h5><b><u> Education </u></b></h5>
                    
                     <b>Colorado State University: </b> Fort Collins, CO
                          <ul> 
                              <li>Candidate for Bachelor of Science in Computer Science</li>
                              <li>Minor: Mathematics</li>
                              <li>Major GPA: 3.57</li>
                          </ul>
             </div>
    )
  }
}
class RelevantCoursework extends React.Component{
  render(){
    return(
            <div className="p-3 mb-2 bg-light text-dark">
                  <h5><b><u>Relevant Coursework</u></b></h5>
                                   
                                      <ul className="columns">
                                        
                                          <li>Object-Oriented Programming (I&II)</li>
                                          <li>Computer Architecture/Organization</li>
                                          <li>Algorithms and Data Structures</li>
                                          <li>Algorithms Theory & Practice</li>
                                        
                                          <li>Software Development with C++</li>
                                          <li>Systems Security</li>
                                          <li>Mathematics of Info Security</li>
                                          <li>Linear Algebra</li>
                                        
                                          <li>Operating Systems (Raspberry Pi Project-SSL Cryptography)</li>
                                          <li>Web Design and Management</li>
                                          <li>Software Engineering</li>
                                          <li>Introduction to Distributed Systems</li>
                                          <li>Undergraduate Research - Network Security</li>
                                      </ul>
                 </div>                   
                        
    )
  }
}

class TechSkills extends React.Component{
  render(){
    return(
      <div className="p-3 mb-2 bg-light text-dark">
      <h5><b><u>Technical Skills</u></b></h5>
                                    <b>Languages: </b> C++, Python, Java, C <br></br>
                                    <b>Version Control: </b> GitHub, BitBucket <br></br>
                                    <b>Text Editors: </b> Emacs, PyCharm, Intellij, Eclipse  <br></br>
                                    <b>Python Packages: </b> Beautiful Soup, Pickle, pip <br></br>
                                    <b>TCP/IP: </b> Basic technical understanding <br></br>
                                    <b>Interests: </b> Computer Graphics, Malware Analysis, Cryptology, Cloud Computing <br></br>
          </div>
    )
  }
}
class Experience extends React.Component{
  render(){
    return(
      <div className="p-3 mb-2 bg-light text-dark">
      <h5><b><u>Experience</u></b></h5> 
                                    <b>Butters AM Eatery: </b> Fort Collins, CO <br></br>
                                            <ul> 
                                                
                                               <li>Worked as a food runner and expeditor to help facilitate an 
                                                  enjoyable dining experience </li>
                                                <li> Coordinated with staff and customers to effectively prepare
                                                      dishes in a timely fashion </li>
                                                <li> Maintained open dialogue between management and guests to 
                                                      ensure high customer satisfaction </li>
                                                <li>May 2017-August 2017</li>
                                             </ul>
                                      <b> CSU Landscapes LLC: </b> Fort Collins, CO <br></br>
                                                <ul>
                                                     
                                                     <li> Installed custom landscape design with a budget of $4,500</li>
                                                     <li>Two-man project which involved building raised garden beds,
                                                            flagstone walkway, and decking </li>
                                                      <li>June 2017-July 2017</li>
                                                </ul>
                                      <b> Landmark Event Staffing Services: </b> Fort Collins, CO <br></br>
                                                <ul>
                                                        
                                                        <li>Provided venue oversight and security at CSU football games</li>
                                                        <li>Handled around $1,000 cash and helped answer questions about                                                                           the venue and game </li>
                                                        <li>October 2015-November 2016</li>
                                                </ul>
                                      <b>Bonsai Nursery: </b> Englewood, CO <br></br>
                                                <ul>
                                                         
                                                         <li> Installed landscape designs </li>
                                                         <li>Communicated with installation crew to create a safe work environment </li>
                                                          <li>Assisted with training new landscape staff</li> 
                                                          <li>May 2015-August 2015</li>
                                                </ul>
        </div>
    )
  }
}
class CurrentCW extends React.Component{
  render(){
    return(
      <div className="p-3 mb-2 bg-light text-dark">
          <h5><b><u>Current Coursework</u></b></h5>
                                        <ul>
                                            <li>Investigating and developing web page interception techniques that can extract JavaScript code from a web page, vet it, and                                                   remove JavaScript code classified as malicious. Investigating and implementing a web scraper, based on publicly available code, to collect and store samples of benign JavaScript code from popular websites.</li>
                                            <li>Will work on Scrum-based team project that will create a mobile, single
                                                page web, trip planning application interacting through REST APIs with
                                              a SQL database and optimization tools.</li>
                                            <li>  Working on an implememtation of routing schemes for packets in a structured peer-to-peer (P2P) overlay system. </li>
                                        </ul> 
                          </div>            
    )
  }
  
}
class App extends React.Component {
  render() {
    return (
      
      <div className="container">
        <Header />
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-md-6">
              <Education />
              <TechSkills />
              <RelevantCoursework />
          </div>
          <div className="col-xs-12 col-md-6">
               <CurrentCW />
               <Experience />
          </div>
        </div>
      </div>
        
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));