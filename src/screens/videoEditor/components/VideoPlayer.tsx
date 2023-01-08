import React, { useCallback } from 'react';
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
    actions: { setVideoRef, setVideoTrack, setAudioTrack },
    state: { videoRef }
  } = useVideoRefState();

  const callBackRef = useCallback(node => {
    if (node) {
      setVideoRef(node);
    }
  }, []);

  const play = () => {
    if (videoRef) {
      videoRef.play();
    }
  };

  const pause = () => {
    if (videoRef) {
      videoRef.pause();
    }
  };

  const stop = () => {
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col h-full place-content-center relative">
      <div className="max-h-full aspect-video">
        <div className="max-h-full flex place-content-center">
          {workingFile.name ? (
            <video src={URL.createObjectURL(workingFile)} ref={callBackRef} id="video-player" />
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
