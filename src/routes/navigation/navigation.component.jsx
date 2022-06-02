import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="navigatioLogo__container" to="/home">
          <CrownLogo className="navigatio__logo" />
        </Link>
        <div className="navigation__links">
          <Link className="link" to="">
            About
          </Link>
          <Link className="link" to="/signIn">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
