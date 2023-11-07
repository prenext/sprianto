import { Copyrights } from "./styled/containers/Copyrights.styled";
import { FootBar } from "./styled/containers/FootBar.styled";
import { FootNav } from "./styled/containers/FootNav.styled";
import { FootNavs } from "./styled/containers/FootNavs.styled";
import { Logo } from "./styled/containers/Logo.styled";
import { LogoImage } from "./styled/images/LogoImage.styled";
import { FootLink } from "./styled/links/FootLink.styled";
import { Info } from "./styled/text/Info.styled";

function Footer() {
 
  return (
    <FootBar>
      <Logo>
        <LogoImage src="assets/logo.png" />
        SpriantoIQ
      </Logo>
      <FootNavs>
        <FootNav>
          <FootLink href="/">Home</FootLink>
          <FootLink href="/services">Services</FootLink>
          <FootLink href="/customers">Customers</FootLink>
          <FootLink href="/contact">Contacts US</FootLink>
          <FootLink href="/about">About</FootLink>
        </FootNav>
        <FootNav>
          <FootLink>FaceBook</FootLink>
          <FootLink>Instagram</FootLink>
          <FootLink>Twitter</FootLink>
          <FootLink>Tiktok</FootLink>
        </FootNav>
        <FootNav>
          <FootLink>Telegram</FootLink>
          <FootLink>Whatsapp</FootLink>
          <FootLink>Email</FootLink>
          <FootLink>Phone</FootLink>
          <FootLink>SMS</FootLink>
        </FootNav>
      </FootNavs>
      <Copyrights>
        <Info>Sprianto IQ</Info>
        <Info>&copy; 2023</Info>
        <Info>Alidante</Info>
      </Copyrights>
    </FootBar>
  );
}

export default Footer;
