import * as React from 'react'; //Gets rid of TS error
import { createContext, useState } from 'react';

// @ts-ignore
export const MediaContext = createContext();

const MediaContextProvider = (props: any) => {
  const [videoFiles, setVideoFiles] = useState<any[]>([]);

  const addMedia = videos => {
    console.log(videos);
    setVideoFiles(current => [...current, ...videos]);
  };

  const state = {
    videoFiles
  };

  const actions = {
    setVideoFiles,
    addMedia
  };

  return <MediaContext.Provider value={{ state, actions }}>{props.children}</MediaContext.Provider>;
};

export const useMediaState = (): any => React.useContext(MediaContext);

export default MediaContextProvider;
