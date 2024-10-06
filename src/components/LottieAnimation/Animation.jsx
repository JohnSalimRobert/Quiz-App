import Lottie from "lottie-react";
import animationData from '../../assets/animation/quiz.json'; // Your Lottie animation file

const LottieAnimation = () => {
  return (
    <Lottie
      loop
      animationData={animationData}
      style={{height: '300px' }}
    />
  );
};

export default LottieAnimation;
