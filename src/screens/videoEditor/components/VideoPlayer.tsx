import React, { useRef, useState, useEffect } from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import { IoPlay, IoStop, IoSadOutline, IoPause } from 'react-icons/io5';
import { Button, Progress } from 'react-daisyui';
import ProgressBar from './ProgressBar';
export const VideoPlayer = () => {
  const {
    state: { workingFile }
  } = useGlobalState();
  const videoRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);
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

  const onProgress = () => {
    // console.log(progress);
    // if (isNaN(videoRef.current.duration)) return;
    // setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  return (
    <div className="flex flex-col place-content-center">
      <div className="max-h-full aspect-video">
        <div className="h-full w- full flex place-content-center">
          {workingFile.name ? (
            <video onTimeUpdate={e => onProgress()} src={URL.createObjectURL(workingFile)} ref={videoRef} />
          ) : (
            <div className="self-center text-center">
              <IoSadOutline size={'4rem'} />
              <h2>No Media</h2>
            </div>
          )}
        </div>
      </div>

      <div className="controls flex flex-col place-content-center pb-1">
        <div>
          <ProgressBar progress={progress} />
        </div>
        <div className="flex flex-row space-x-4 place-content-center">
          <Button size="lg" color="ghost" onClick={() => play()}>
            <IoPlay size={'2rem'} />
          </Button>
          <Button size="lg" color="ghost" onClick={() => pause()}>
            <IoPause size={'2rem'} />
          </Button>
          <Button size="lg" color="ghost" onClick={() => console.log('STOP')}>
            <IoStop size={'2rem'} />
          </Button>
        </div>
      </div>
    </div>
  );
};
