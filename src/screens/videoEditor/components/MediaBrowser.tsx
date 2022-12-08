import React, { useRef } from 'react';
import { Button, Divider } from 'react-daisyui';
import { IoAddOutline } from 'react-icons/io5';
import { useMediaState } from '../../../contexts/MediaContext';
import MediaList from './MediaList';

const MediaBrowser = () => {
  const mediaBtnRef: any = useRef();
  const {
    actions: { addMedia }
  } = useMediaState();

  const inputMedia = e => {
    if (e.files || e.files.length > 1) {
      const media = Array.from(e.files);
      addMedia(media);
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="file"
        accept=".mp4"
        style={{ display: 'none' }}
        id="file"
        ref={mediaBtnRef}
        multiple
        onChange={e => inputMedia(e.target)}
      />
      <span className="flex space-x-4 mt-2 pl-1 pr-1 place-content-center">
        <span className="w-1/3"></span>
        <span className="w-1/3 self-center text-center">
          <h1>Media Pool</h1>
        </span>
        <span className="w-1/3">
          <Button
            className="float-right"
            shape="circle"
            size="sm"
            color="primary"
            variant="outline"
            onClick={() => {
              mediaBtnRef.current.click();
            }}
          >
            <IoAddOutline />
          </Button>
        </span>
      </span>
      <Divider className="mt-0 mb-0" />
      <MediaList />
    </div>
  );
};

export default MediaBrowser;
