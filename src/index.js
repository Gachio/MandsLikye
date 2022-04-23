
class Header extends React.Component{
  render() {
    return (
      <div>
      <h1 className="text-center">MandsLike Group</h1>
        </div>

    )
  }
}

class Info extends React.Component {
  render() {
    return (
      <div>
       <p class="text-center">
       poppa@sekoudynasty.onmicrosoft.com
    
        703-428-0160
      </p>
      <p class="text-center">
        1512 Rumen Shields Street</p><p class="text-center"> Port Colle, IK 80521
      </p>
        <hr></hr>
      </div>
    )
  }
}

class Objective extends React.Component {
  render() {
    return (
      <div>
      <div class="Objective">
          <h2><ul>GOAL</ul></h2>
            <p><ul> To use use our privilege and abilities to help others and to always bring our best self into every endeaver we embark on. We are highly motivated, bubbly, and hard working team who decided to create some portfolio in the devops culture in order to use those skills to teach others practical skills to change their lives and improve their communities. 
         </ul> </p>
        <hr></hr>
      </div>
        </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return (
      <div>
    <div class="Education">
            <h2><ul>How it started</ul></h2>
            <p><ul>Thought about this (Feb 2022).</ul></p>
            <p><ul>Current engineer at Tek Experts working on Microsoft Dynamics. Expected portfolio time (June 2022).</ul></p>
      <hr></hr>
      </div>
        </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div>
       <div class="Skills">
         <h2><ul>Skills</ul></h2>
            
           <li><ul> GitHub
         </ul> </li>
              <li> <ul>Customer Relationship Management (CRM)
        </ul>  </li>
          <li> <ul>Linux
        </ul>  </li>
          <li><ul> Scripting (Python, JavaScript, Shel)
         </ul> </li>
         <hr></hr>
      </div>
       </div>
    )
  }
}
   class WorkExperience extends React.Component {
  render() {
    return (
      <div>
       <div class="Work Experience">
            <h2><ul>Work Experience</ul></h2>
            <li><ul>
              Software developer intern at the Access Bank Academy (November 2019-Present)
         </ul> </li>
          <li><ul>
           IT staff at Ridge TechKafge (November 2019-November 2022)
         </ul> </li>
          <li><ul>Collabotating team member at Cornerstone Church Events Department (August 2010- May 2012)
          </ul></li>
      </div>
        </div>
    )
  }
}

class Languages extends React.Component {
  render() {
    return (
      <div>
      <div class="Languages">
            <h2><ul>Languages</ul></h2>
            <li><ul>Python
          </ul></li>
              
<li><ul>Ruby
         </ul> </li>
          <li><ul>JavaScript
          </ul></li>
      </div>
        <hr></hr>

        </div>
        
    )
  }
}



class Main extends React.Component {
  render() {
    return (
      <div>
      <div className="jumbotron">
        <Header />
        <hr/>
        <Info />
       </div>
       <Objective />
        <Education />
        <Skills />
        <WorkExperience />
        <Languages />
       </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));