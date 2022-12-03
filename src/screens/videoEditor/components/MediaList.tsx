import React from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import NothingHere from '../../global/NothingHere';
import MediaItem from './MediaItem';

const MediaList = () => {
  const {
    state: { videoFiles }
  } = useGlobalState();
  console.log(videoFiles);
  return (
    <div className="overflow-y-auto">
      {videoFiles === null || videoFiles?.length === 0 ? (
        <NothingHere />
      ) : (
        <div className="flex flex-wrap">
          {videoFiles.map(item => (
            <MediaItem item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaList;
