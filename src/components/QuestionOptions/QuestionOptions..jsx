// import  { useState } from 'react';
import {  Button, Paper, Grid, Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LottieAnimation from "../LottieAnimation/Animation";
// import { Player } from '@lottiefiles/react-lottie-player';

const QuestionOptions = ({ options, handleSelect, disableButton }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  // Styles object
  const styles = {
    optionPaper: () => ({
    //   padding: theme.spacing(2),
      // backgroundColor: selectedOption === option ? theme.palette.primary.light : theme.palette.background.paper,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        transform: 'scale(1.03)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        fontSize: '0.875rem',
      },
    }),
    optionButton: () => ({
      textTransform: 'none',
      justifyContent: 'flex-start',
      padding: isSmallScreen ? '8px' : '12px 16px',
      fontSize: isSmallScreen ? '0.875rem' : '1rem',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      '&:hover': {
        color:'white'
      },
      border: 'none'
    }),
  };

  return (
    <Grid container spacing={2} p={2}>
      {options?.length === 0 && <Stack justifyContent={'center'} alignItems={'center'} width={'100%'}>
      <LottieAnimation />
      </Stack>}
    {options?.map((option, index) => (
      <Grid item xs={12} sm={6} key={index}>
        <Paper 
          // elevation={selectedOption === option ? 8 : 2}
          sx={styles.optionPaper(option)}
          
        >
          <Button 
          onClick={() => handleSelect(option)}
            fullWidth
            // variant={selectedOption === option ? 'contained' : 'outlined'} 
            // color={selectedOption === option ? 'primary' : 'inherit'}
            sx={styles.optionButton(option)}
            disabled={disableButton}
          >
            {option}
          </Button>
        </Paper>
      </Grid>
    ))}
  </Grid>
  );
};

export default QuestionOptions;
