import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "@/styles/shared.styles";
import headerConfig from "@/config/header.config";

const Header: React.FC = () => {
  const { sitemark, navigation, buttonText } = headerConfig;

  return (
    <Box sx={styles.header}>
      <Image src={sitemark.image} alt={sitemark.alt} width={150} height={35} />
      <Box sx={styles.nav}>
        {navigation.map((nav, index) => (
          <Button key={index} sx={styles.link} href={nav.href}>
            {nav.label}
          </Button>
        ))}
      </Box>
      <Button sx={styles.button} variant="contained" color="primary">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Header;
