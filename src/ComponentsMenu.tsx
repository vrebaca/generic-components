import 'bootstrap/dist/css/bootstrap.min.css';
import ftLogo from './assets/ft-logo.png';

const ComponentsMenu = () => {
  return (
<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "300px", height: "100vh", overflowY: "hidden"}}>
    <a href="#/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <img  width="40" height="40" src={ftLogo}></img>
      &nbsp;&nbsp;
      <span className="fs-6">generic-components</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#/" className="nav-link text-white" aria-current="page">
          Intro
        </a>
      </li>
      <li>
        <a href="#/steptracker" className="nav-link text-white">
          Step tracker
        </a>
      </li>
    </ul>
  </div>
  );
};

export default ComponentsMenu;