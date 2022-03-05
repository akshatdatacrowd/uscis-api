import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="leftHeader">
        <Link to="/">
          <p className="title">This is a fucking title</p>
        </Link>
      </div>
      <div className="rightHeader">
        <Link to="/pricing">
          <p className="opt">Pricing</p>
        </Link>
        <Link to='/tracker'><p className="opt">Case Tracker</p></Link>
        <p className="opt">FAQ</p>
        <Link to='/playarea'><p className="opt">Play Area</p></Link>
        <p className="opt">Status</p>
        <p className="opt LoginBtnHeader">Login</p>
        <Link to='/signup'><p className="opt ApiBtnHeader">GET FREE API KEY</p></Link>
      </div>
    </div>
  );
};

export default Header;
