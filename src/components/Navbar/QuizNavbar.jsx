import { Paper, Typography } from "@mui/material";

const Navbar = () => {
  const styles = {
    paper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexBasis: "100%", // Makes the navbar responsive
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Adds a soft drop shadow
      backgroundColor: "#3f51b5", // Primary color, feel free to customize
      borderRadius: "0px",
      height: "5vh",
    },
    title: {
      flexGrow: 1, // This ensures the title is centered by pushing content to both ends
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      margin: "auto",
    },
  };

  return (
    <Paper elevation={3} sx={styles.paper}>
      <Typography variant="h6" sx={styles.title}>
        Quiz App
      </Typography>
    </Paper>
  );
};

export default Navbar;
