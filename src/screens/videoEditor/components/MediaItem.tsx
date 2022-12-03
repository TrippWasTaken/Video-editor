import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';

const MediaItem = ({ item }) => {
  return (
    <div className="bg-base-300 m-2 p-1 max-w-[150px] rounded-md hover:scale-110 transition ease-in duration-150 hover: cursor-pointer">
      <video className="rounded-md" src={URL.createObjectURL(item)} width={150} />
      <p className="truncate overflow-hidden">{item.name}</p>
    </div>
  );
};

export default MediaItem;
