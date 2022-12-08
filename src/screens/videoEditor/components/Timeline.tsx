import React, { useEffect } from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import { useVideoRefState } from '../../../contexts/VideoRefContext';

export const Timeline = () => {
  const {
    state: { workingFile }
  } = useGlobalState();

  const {
    state: { videoRef }
  } = useVideoRefState();

  const tracks = [{ videoTrack: {} }, { audioTrack: {} }];
  useEffect(() => {
    console.log(workingFile);
  }, [workingFile]);

  return (
    <div className="timeline-grid-cont">
      {[1, 3, 4, 5].map(e => (
        <div className="timeline-area-a">{e}</div>
      ))}
      {[1, 3, 4, 5].map(e => (
        <div className="timeline-area-b">{e}</div>
      ))}
    </div>
  );
};
