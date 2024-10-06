import { Stack, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircularProgressWithLabel from "../utils/CircularProgressWithLabel";
import { useEffect } from "react";
const Footer = ({ response, isCorrect, setTimer, timer, setOpen, score }) => {
    // console.log(handleNext);
  const handleTimer = () =>{
    setOpen(true);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
            handleTimer();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timer]);
  return (
    <Stack
      marginY={4}
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
    >
      <Stack direction="row">
        {response && (
          <>
            {isCorrect ? (
              <CheckCircleOutlineIcon sx={themeStyle.iconCorrect} />
            ) : (
              <HighlightOffIcon sx={themeStyle.iconWrong} />
            )}
            <Typography
              sx={{
                ...themeStyle.responseText,
                color: isCorrect ? "green" : "red",
              }}
            >
              {response}
            </Typography>
          </>
        )}
      </Stack>
      <Stack>
        <CircularProgressWithLabel value={timer} />
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems={'center'}>
        <Typography variant="h5" sx={themeStyle.score}>Score: {score} /6 </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
const themeStyle = {
  responseText: {
    fontFamily: '"Lobster", cursive',
    fontSize: "1.5rem",
    transition: "color 0.3s ease",
  },
  iconCorrect: {
    color: "green",
    fontSize: "2.5rem",
    animation: "bounce 0.5s ease-in-out",
  },
  iconWrong: {
    color: "red",
    fontSize: "2.5rem",
    animation: "shake 0.5s ease-in-out",
  },
  "@keyframes bounce": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
  "@keyframes shake": {
    "0%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-5px)" },
    "50%": { transform: "translateX(5px)" },
    "75%": { transform: "translateX(-5px)" },
    "100%": { transform: "translateX(0)" },
  },
  score: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: "12px",
    // fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
    flexWrap: "nowrap",
  },
};
