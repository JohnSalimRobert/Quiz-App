import { Modal, Box, Typography, Button, Backdrop, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RulesModal = ({ open, handleStart }) => {
  const theme = useTheme();

  const styles = {
    modalBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      textAlign: "center",
      borderRadius: "10px",
      outline: "none",
      color: "black",
    },
    startButton: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      textTransform: "none",
      padding: "8px 16px",
      fontSize: "1rem",
    },
  };

  return (
    <Modal
      aria-labelledby="rules-modal-title"
      aria-describedby="rules-modal-description"
      open={open}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={styles.modalBox}>
          <Typography id="rules-modal-title" variant="h6" component="h2">
            Quiz Rules
          </Typography>
          <Typography
            id="rules-modal-description"
            sx={{ mt: 2, textAlign: "left" }}
            component="div"
          >
            <ul>
              <li>Each question is timed.</li>
              <li>You cannot go back to previous questions.</li>
              <li>Answer carefully within the time limit.</li>
              <li>
                You can hover over the <strong>Need Help?</strong> section to
                get hints.
              </li>
            </ul>
          </Typography>

          <Button sx={styles.startButton} onClick={handleStart}>
            Start Quiz
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default RulesModal;
