import { Button, Stack } from "@mui/material"


const Buttons = ({handleNext, buttonText}) => {
    // const buttonText = next < 0 ? "Start": "Next";
  return (
    <Stack>
        <Button onClick={handleNext}>{buttonText}</Button>
    </Stack>
  )
}

export default Buttons