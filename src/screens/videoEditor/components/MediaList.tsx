import React from 'react';
import { v4 } from 'uuid';
import { useMediaState } from '../../../contexts/MediaContext';
import NothingHere from '../../global/NothingHere';
import MediaItem from './MediaItem';

const MediaList = () => {
  const {
    state: { videoFiles }
  } = useMediaState();
  return (
    <div className="overflow-y-auto">
      {videoFiles === null || videoFiles?.length === 0 ? (
        <NothingHere />
      ) : (
        <div className="flex flex-wrap">
          {videoFiles.map(item => (
            <MediaItem item={item} key={`videoFile-${v4()}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaList;
