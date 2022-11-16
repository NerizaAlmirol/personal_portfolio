import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Neriza</h2>
        <div className="prompt">
          <p>I'm a Software Engineer and a Food Blogger based in Barcelona.</p>
          <a href="https://www.linkedin.com/in/neriza-almirol/"  target="_blank">
          <LinkedInIcon />
          </a>
          <a href="mailto:hello@nerizaalmirol.com">
          <EmailIcon />
          </a>  
          <a href="https://github.com/NerizaAlmirol"  target="_blank">
          <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL, MongoDB, AWS, SQL, PHP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;