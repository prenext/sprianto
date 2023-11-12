import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, NavBar, Logo } from "./styled/containers/Containers";
import { IconButton } from "./styled/buttons/Buttons";
import { NavLink } from "./styled/links/Links";
import { LogoImage } from "./styled/images/Images";
import { useState, useEffect } from "react";

function Header() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const toggleNavBarVisibility = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (_event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar $scrollTop={scrollTop}>
      <Logo>
        <LogoImage src="assets/logo.png" />
        SpriantoIQ
      </Logo>
      <NavBar $isVisible={isNavBarVisible}>
        <NavLink href="/">
          <FontAwesomeIcon icon="home" />
           Home
        </NavLink>
        <NavLink href="/services">
          <FontAwesomeIcon icon="hands" />
           Services
        </NavLink>
        <NavLink href="/customers">
          <FontAwesomeIcon icon="stop" />
           Customers
        </NavLink>
        <NavLink href="/contact">
          <FontAwesomeIcon icon="phone" />
          Contacts US
        </NavLink>
        <NavLink href="/about">
          <FontAwesomeIcon icon="arrow-right" />
          About
        </NavLink>
      </NavBar>
      <IconButton onClick={toggleNavBarVisibility}>
        <FontAwesomeIcon icon="bars" />
      </IconButton>
    </AppBar>
  );
}

export default Header;
