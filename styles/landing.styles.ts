import { SxProps, Theme } from "@mui/material/styles";

const styles: { [key: string]: SxProps<Theme> } = {
  root: {
    py: {
      xs: 1,
      sm: 2,
    },
    px: {
      xs: 2,
      sm: 4,
    },
    textAlign: "center",
  },
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
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#555",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  inputField: {
    width: "300px",
    marginRight: "10px",
  },
  button: {
    color: "#fff",
    py: "10px",
    px: "20px",
  },
  cardGrid: {
    marginTop: "40px",
  },
  card: {
    padding: "20px",
    textAlign: "left",
  },
  avatar: {
    width: 56,
    height: 56,
    marginBottom: "10px",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  starIcon: {
    marginRight: "5px",
    color: "#ffb400",
  },
  footer: {
    marginTop: "40px",
    fontSize: "0.875rem",
    color: "#888",
  },
};

export default styles;
