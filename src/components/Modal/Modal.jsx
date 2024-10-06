import { Modal, Box, Typography, Button, Fade, Backdrop } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { useTheme } from '@mui/material/styles';

const TimeUpModal = ({ open, handleClose, handleNext, setOpen }) => {
  const theme = useTheme();

  const handleNextModal = () => {
    setOpen(false);
    handleNext();
  }

  const styles = {
    modalBox: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      textAlign: 'center',
      borderRadius: '10px',
      outline: 'none',
      color: 'black'
    },
    icon: {
      fontSize: 80,
      color: theme.palette.error.main,
      marginBottom: theme.spacing(2),
    },
    nextButton: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      textTransform: 'none',
      padding: '8px 16px',
      fontSize: '1rem',
    },
  };

  return (
    <Modal
      aria-labelledby="times-up-modal-title"
      aria-describedby="times-up-modal-description"
      open={open}
      onClose={handleClose}
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
          <HourglassBottomIcon sx={styles.icon} />
          <Typography id="times-up-modal-title" variant="h6" component="h2">
            Time’s Up!
          </Typography>
          <Typography id="times-up-modal-description" sx={{ mt: 2 }}>
            Your time for this question has expired. Please proceed to the next question.
          </Typography>
          <Button sx={styles.nextButton} onClick={handleNextModal}>
            Next Question
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TimeUpModal;
