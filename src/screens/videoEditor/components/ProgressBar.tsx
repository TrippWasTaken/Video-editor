import React, { useState } from 'react';
import { Progress } from 'react-daisyui';

const ProgressBar = ({ progressRef }) => {
  const [progress, setProgress] = useState(0);
  const [listener, setListener] = useState(false);

  if (progressRef != null && !listener) {
    console.log(progressRef);
    progressRef.ontimeupdate = e => {
      if (isNaN(e.target.duration)) return;
      setProgress((e.target.currentTime / e.target.duration) * 100);
    };
    setListener(true);
  }

  return <Progress color="primary" value={progress} max={100} />;
};

export default ProgressBar;
