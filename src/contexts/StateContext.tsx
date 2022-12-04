import * as React from 'react'; //Gets rid of TS error
import { createContext, useState } from 'react';

interface globalState {
  theme: string;
  videoFiles: any;
  workingFile: any;
  confirmModal: any;
  progress: number;
}

// @ts-ignore
export const StateContext = createContext();

const StateContextProvider = (props: any) => {
  const [theme, setTheme] = useState('dracula');
  const [videoFiles, setVideoFiles] = useState<any[]>([]);
  const [workingFile, setWorkingFile] = useState<any>({});
  const [confirmModal, setConfirmModal] = useState({ visible: false, onConfirm: () => {}, message: '' });

  const addMedia = videos => {
    console.log(videos);
    setVideoFiles(current => [...current, ...videos]);
  };

  const state: globalState = {
    theme,
    videoFiles,
    workingFile,
    confirmModal
  };

  const actions = {
    setTheme,
    setVideoFiles,
    addMedia,
    setWorkingFile,
    setConfirmModal
  };

  return <StateContext.Provider value={{ state, actions }}>{props.children}</StateContext.Provider>;
};

export const useGlobalState = (): any => React.useContext(StateContext);

export default StateContextProvider;
