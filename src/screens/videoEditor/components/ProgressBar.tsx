import React, { useEffect } from 'react';
import { Progress } from 'react-daisyui';

const ProgressBar = ({ progress }) => {
  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return <Progress color="primary" value={progress} max={100} />;
};

export default ProgressBar;
