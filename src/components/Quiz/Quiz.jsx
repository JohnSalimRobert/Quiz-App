import { Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Buttons from "../utils/Buttons";
import networkQuestions from "../../data/networkQuestions";
import QuestionOptions from "../QuestionOptions/QuestionOptions.";

import { shuffleOptions } from "../../utils/randomize";
import Footer from "../QuizFooter/Footer";
import QuestionBlockMemo from "../QuestionBlock/QuestionBlock";
import TransitionsModal from "../Modal/Modal";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const shuffledQuestions = shuffleOptions(networkQuestions);

const Quiz = () => {
  const [next, setNext] = useState(-1);
  const [timer, setTimer] = useState(0);
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({
    question: "Press Start to begin",
    hint: "Answer before the timer runs out",
    options: [],
  });
  const [response, setResponse] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const handleStart = () => {
    setStart(!start);
    handleNext();
  };
  const handleNext = () => {
    if (next === 6) return;
    setNext(() => {
      setTimer(30);
      handleNextQuestion();
      return next + 1;
    });
  };

  const handleSelect = (option) => {
    if (option === question.answer) {
      setResponse("Correct");
      setIsCorrect(true);
      setScore((prev) => prev + 1);
      setDisableButton(true);
      setTimeout(() => {
        setDisableButton(false);
        handleNext();
      }, 1000);
    } else {
      setResponse("Wrong answer");
      setIsCorrect(false);
      setDisableButton(true);
      setTimeout(() => {
        setDisableButton(false);
        handleNext();
      }, 1000);
    }
  };

  const handleNextQuestion = () => {
    if (next === 5) {
      setStart(false);
      setNext(-1);
      setScore(0);
      setResponse("");
      setQuestion({
        question: "Quiz completed! Thanks for playing.",
        options: [],
        hint: "Play again?",
      });
    } else {
      setResponse("");
      setQuestion(shuffledQuestions[next + 1]);
    }
  };

  return (
    <Stack
      width={{ lg: "50%", md: "60%", xs: "80%" }}
      m={"auto"}
      height={"95vh"}
      justifyContent={"center"}
    >
      <Tooltip title={question.hint} placement="top-end">
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          p={1}
        >
          <Typography sx={themeStyle.needHelp}>Need help?</Typography>
          <HelpOutlineIcon sx={themeStyle.needHelp} />
        </Stack>
      </Tooltip>
      <Stack sx={themeStyle.card}>
        <QuestionBlockMemo question={question.question} />
        <QuestionOptions
          disableButton={disableButton}
          options={question.options}
          handleSelect={handleSelect}
        />
        {start && <Buttons handleNext={handleNext} buttonText={"next"} />}
        {!start && <Buttons handleNext={handleStart} buttonText={"Start"} />}
      </Stack>
      {start && (
        <Footer
          response={response}
          score={score}
          isCorrect={isCorrect}
          handleNext={handleNext}
          timer={timer}
          setTimer={setTimer}
          setOpen={setOpen}
          next={next}
        />
      )}
      {open && (
        <TransitionsModal
          open={open}
          setOpen={setOpen}
          handleNext={handleNext}
        />
      )}
    </Stack>
  );
};

export default Quiz;

const themeStyle = {
  card: {
    backgroundColor: "#bac0c2",
    borderRadius: "10px",
    gap: 2,
    // margin: "0 auto",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    ":hover": {
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
    },
  },
  needHelp: {
    color: "gray",
    marginLeft: "2px",
    cursor: "pointer",
    fontStyle: "italic",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "10px",
    textAlign: "right",
  },
};
