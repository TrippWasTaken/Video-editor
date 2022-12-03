import React from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import NothingHere from '../../global/NothingHere';

const MediaList = () => {
  const {
    state: { videoFiles }
  } = useGlobalState();
  console.log(videoFiles);
  return (
    <div className="overflow-auto">
      {videoFiles === null || videoFiles?.length === 0 ? (
        <NothingHere />
      ) : (
        <>
          {videoFiles.map(item => (
            <div key={item.lastModified}>{item.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default MediaList;
