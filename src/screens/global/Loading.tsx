import React from 'react';
import { IoSyncCircleSharp } from 'react-icons/io5';

interface Props {
  hide: boolean;
}
const Loading = ({ hide }: Props) => {
  return (
    <div
      className="items-center"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.2',
        zIndex: '999',
        left: '0',
        top: '0',
        display: `${hide ? 'none' : 'block'}`
      }}
    >
      <div
        style={{
          margin: '0',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <IoSyncCircleSharp size={'10rem'} className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
