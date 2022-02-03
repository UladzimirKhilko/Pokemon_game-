import { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setIsShowNavbar(!isShowNavbar);
  };

  return (
    <>
      <Menu showNavBar={isShowNavbar} />
      <NavBar onShowNavbar={handleShowNavbar} showNavBar={isShowNavbar} />
    </>
  );
};

export default MenuHeader;
