import React, { useEffect, useRef } from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import { IoPlay, IoStop, IoSadOutline, IoPause } from 'react-icons/io5';
import { Button } from 'react-daisyui';
import ProgressBar from './ProgressBar';
import { useVideoRefState } from '../../../contexts/VideoRefContext';
export const VideoPlayer = () => {
  const {
    state: { workingFile }
  } = useGlobalState();

  const {
    actions: { setVideoRef },
    state: { videoRef }
  } = useVideoRefState();

  const ref = useRef<any>(null);
  const play = () => {
    if (workingFile.name && videoRef) {
      ref.current.play();
    }
  };

  const pause = () => {
    if (workingFile.name && videoRef) {
      ref.current.pause();
    }
  };

  const stop = () => {
    if (workingFile.name && videoRef) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (ref.current) setVideoRef(ref.current);
  }, [workingFile, videoRef, setVideoRef]);

  return (
    <div className="flex flex-col h-full place-content-center relative">
      <div className="max-h-full aspect-video">
        <div className="max-h-full flex place-content-center">
          {workingFile.name ? (
            <video src={URL.createObjectURL(workingFile)} ref={ref} />
          ) : (
            <div className="self-center text-center">
              <IoSadOutline size={'4rem'} />
              <h2>No Media</h2>
            </div>
          )}
        </div>
      </div>
      {videoRef && (
        <div className="controls flex flex-col place-content-center absolute pb-1 w-full bottom-0 bg-base-100/40">
          <div>
            <ProgressBar progressRef={videoRef} />
          </div>
          <div className="flex flex-row space-x-4 place-content-center">
            <Button size="md" color="ghost" onClick={() => play()}>
              <IoPlay size={'2rem'} />
            </Button>
            <Button size="md" color="ghost" onClick={() => pause()}>
              <IoPause size={'2rem'} />
            </Button>
            <Button size="md" color="ghost" onClick={() => stop()}>
              <IoStop size={'2rem'} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
