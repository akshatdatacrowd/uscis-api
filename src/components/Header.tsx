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
        <p className="opt">Documentation</p>
        <p className="opt">FAQ</p>
        <p className="opt">Blog</p>
        <p className="opt">Status</p>
        <p className="opt LoginBtnHeader">Login</p>
        <p className="opt ApiBtnHeader">GET FREE API KEY</p>
      </div>
    </div>
  );
};

export default Header;
