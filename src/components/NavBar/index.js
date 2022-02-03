/* eslint-disable jsx-a11y/anchor-is-valid */
import s from "./style.module.css";
import cn from "classnames";

const NavBar = ({ onShowNavbar, showNavBar }) => {
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={showNavBar ? cn(s.menuButton, s.active) : cn(s.menuButton)}
          onClick={onShowNavbar}
        >
          <span />
        </a>{" "}
      </div>
    </nav>
  );
};

export default NavBar;
