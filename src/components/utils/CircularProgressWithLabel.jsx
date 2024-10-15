
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
function CircularProgressWithLabel(props) {
  const theme = useTheme();

    let progressColor;
    if (props.value > 15) {
      progressColor = theme.palette.primary.main; // Default color
    } else if (props.value > 10) {
      progressColor = theme.palette.warning.main; // Warning color
    } else {
      progressColor = theme.palette.error.main; // Error color
    }
  
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} value={(props.value / 30) * 100}   sx={{ color: progressColor }}  />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {`${Math.round(props.value)}`}
          </Typography>
        </Box>
      </Box>
    );
  }

  export default CircularProgressWithLabel