import React from 'react';
import AudioTab from './components/AudioTab';
import { MediaBorwser } from './components/MediaBorwser';
import { Timeline } from './components/Timeline';
import { VideoPlayer } from './components/VideoPlayer';
import Split from 'react-split';

const VideoEditorContainer = () => {
  return (
    <>
      <Split style={{ height: '100%', width: '100%' }} direction="vertical" gutterSize={5} sizes={[60, 40]}>
        <div className="bg-base-100">
          <Split className="flex" style={{ height: '100%' }} gutterSize={5} sizes={[30, 50, 20]}>
            <MediaBorwser />
            <VideoPlayer />
            <AudioTab />
          </Split>
        </div>
        <div className="bg-base-300">
          <Timeline />
        </div>
      </Split>
    </>
  );
};

export default VideoEditorContainer;
