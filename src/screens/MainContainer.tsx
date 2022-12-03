import React, { useState, useEffect } from 'react';
import { Theme } from 'react-daisyui';
import { useGlobalState } from '../contexts/StateContext';
import TopNav from './global/TopNav';
import VideoEditorContainer from './videoEditor/VideoEditorContainer';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import Loading from './global/Loading';

const MainContainer = () => {
  const [ready, setReady] = useState(false);
  const ffmpeg = createFFmpeg({ log: true });
  const {
    state: { theme }
  } = useGlobalState();

  const loadFFmpeg = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    loadFFmpeg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Theme dataTheme={theme}>
      <Loading hide={ready} />
      <div className="h-screen">
        <TopNav />
        <VideoEditorContainer />
      </div>
    </Theme>
  );
};

export default MainContainer;
