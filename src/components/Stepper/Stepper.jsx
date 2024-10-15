import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Question 1',
  'Question 2',
  'Question 3',
  'Question 4',
  'Question 5',
  'Question 6',
];

export default function QuizStepper({ currentQuestion }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={currentQuestion} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={currentQuestion > index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
