import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, NavBar, Logo } from "./styled/containers/Containers";
import { IconButton } from "./styled/buttons/Buttons";
import { NavLink } from "./styled/links/Links";
import { LogoImage } from "./styled/images/Images";
import { useState } from "react";

function Header() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const toggleNavBarVisibility = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <AppBar>
      <Logo>
        <LogoImage src="assets/logo.png" />
        SpriantoIQ
      </Logo>
      <NavBar $isVisible={isNavBarVisible}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/customers">Customers</NavLink>
        <NavLink href="/contact">Contacts US</NavLink>
        <NavLink href="/about">About</NavLink>
      </NavBar>
      <IconButton onClick={toggleNavBarVisibility}>
        <FontAwesomeIcon icon="bars" />
      </IconButton>
    </AppBar>
  );
}

export default Header;
