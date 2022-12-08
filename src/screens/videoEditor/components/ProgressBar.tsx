import React, { useState } from 'react';
import { Progress } from 'react-daisyui';

const ProgressBar = ({ progressRef }) => {
  const [progress, setProgress] = useState(0);

  if (progressRef != null) {
    progressRef.ontimeupdate = e => {
      if (isNaN(e.target.duration)) return;
      setProgress((e.target.currentTime / e.target.duration) * 100);
    };
  }

  const setCustomPosition = e => {
    const elementWidth = e.target.getBoundingClientRect();
    const xClick = (e.clientX - elementWidth.left) / elementWidth.width;
    progressRef.currentTime = xClick * progressRef.duration;
  };
  return (
    <Progress
      className="hover:cursor-pointer"
      color="primary"
      value={progress}
      max={100}
      onClick={e => setCustomPosition(e)}
    />
  );
};

export default ProgressBar;
