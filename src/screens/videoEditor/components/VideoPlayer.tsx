import React, { useRef } from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import { IoPlay, IoStop, IoSadOutline, IoPause } from 'react-icons/io5';
import { Button } from 'react-daisyui';
import ProgressBar from './ProgressBar';
export const VideoPlayer = () => {
  const {
    state: { workingFile }
  } = useGlobalState();
  const videoRef = useRef<any>(null);
  const play = () => {
    if (workingFile.name && videoRef.current) {
      videoRef.current.play();
    }
  };

  const pause = () => {
    if (workingFile.name && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const stop = () => {
    if (workingFile.name && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div className="flex flex-col place-content-center">
      <div className="max-h-full aspect-video">
        <div className="h-full w- full flex place-content-center">
          <video
            src={workingFile.name ? URL.createObjectURL(workingFile) : ''}
            ref={videoRef}
            style={{ display: workingFile.name ? 'inline' : 'none' }}
          />
          {!workingFile.name && (
            <div className="self-center text-center">
              <IoSadOutline size={'4rem'} />
              <h2>No Media</h2>
            </div>
          )}
        </div>
      </div>
      {workingFile.name && videoRef.current && (
        <div className="controls flex flex-col place-content-center pb-1">
          <div>
            <ProgressBar progressRef={videoRef.current} />
          </div>
          <div className="flex flex-row space-x-4 place-content-center">
            <Button size="lg" color="ghost" onClick={() => play()}>
              <IoPlay size={'2rem'} />
            </Button>
            <Button size="lg" color="ghost" onClick={() => pause()}>
              <IoPause size={'2rem'} />
            </Button>
            <Button size="lg" color="ghost" onClick={() => stop()}>
              <IoStop size={'2rem'} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
