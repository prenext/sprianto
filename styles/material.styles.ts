import { SxProps } from "@mui/material";

// Define your styles object
const materialStyles: SxProps = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
};

export default materialStyles;

