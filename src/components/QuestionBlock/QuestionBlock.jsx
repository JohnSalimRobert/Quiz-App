import { Stack, Typography } from "@mui/material";
import { memo } from "react";


const QuestionBlock = ({ question='Question' }) => {
  console.log('rerender')
  return (
    <Stack sx={themeStyle.headerBackground}>
      <Typography sx={themeStyle.questionTitle}>{question}</Typography>
    </Stack>
  );
};
const QuestionBlockMemo = memo(QuestionBlock, (prevProps, nextProps) => {
  return prevProps.question === nextProps.question;
});

export default QuestionBlockMemo;

const themeStyle = {
  headerBackground:{
    backgroundColor: "#FFF",
    borderRadius: "10px 10px 0 0",
    padding: "10px"
  },
  questionTitle: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: "18px",
    // fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
    flexWrap: "nowrap",
    textAlign: "center"
  },
};
