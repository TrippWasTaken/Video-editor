import * as React from 'react'; //Gets rid of TS error
import { createContext, useState } from 'react';

// @ts-ignore
export const VideoRefContext = createContext();

const VideoRefContextProvider = (props: any) => {
  const [videoRef, setVideoRef] = useState(null);
  const [track, setVideoTrack] = useState(false);
  const [audioTrack, setAudioTrack] = useState(null);

  const state = {
    videoRef,
    track,
    audioTrack
  };

  const actions = {
    setVideoRef,
    setVideoTrack,
    setAudioTrack
  };

  return <VideoRefContext.Provider value={{ state, actions }}>{props.children}</VideoRefContext.Provider>;
};

export const useVideoRefState = (): any => React.useContext(VideoRefContext);

export default VideoRefContextProvider;
