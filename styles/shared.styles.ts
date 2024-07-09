import { SxProps } from "@mui/material";

const sharedStyles: SxProps = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: {
      xs: 0,
      sm: 2,
    },
    py: {
      xs: 1,
      sm: 2,
    },
  },
  nav: {
    display: {
      xs: "none",
      sm: "flex",
    },
    justifyContent: "space-between",
    alignItems: "center",
    p: {
      xs: 0,
      sm: 2,
    },
    py: {
      xs: 1,
      sm: 2,
    },
    gap: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 8,
    },
  },
  link: {
    color: "primary.main",
    textDecoration: "none",
    textTransform: "capitalize",
    fontSize: "1rem",
  },
};

export default sharedStyles;
