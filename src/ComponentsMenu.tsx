import ftLogo from './assets/ft-logo.png';

const ComponentsMenu = () => {
  return (
    <nav className="navbar-default navbar-static-side">
      <div className="sidebar-collapse flex-column" id="side-menu">
        <div className="nav-header" style={{ padding: '10px 0px 10px 0px', textAlign: 'center' }}>
          <img src={ftLogo} style={{ height: "30px" }}></img>
          &nbsp;&nbsp;
          <span style={{ color: "white" }}>Generic components</span>
        </div>
        <ul className="nav">
          <li><a href="#/" className="nav-link text-white" aria-current="page">Intro</a></li>
          <li><a href="#/steptracker" className="nav-link text-white">Step tracker</a></li>
          <li><a href="#/search" className="nav-link text-white">Search</a></li>
          <li><a href="#/table" className="nav-link text-white">Tanstack table</a></li>
          <li><a href="#/combobox" className="nav-link text-white">ComboBox</a></li>
        </ul>
      </div>
    </nav>);
};

export default ComponentsMenu;