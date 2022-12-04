import React from 'react';
import { useGlobalState } from '../../../contexts/StateContext';

const MediaItem = ({ item }) => {
  const {
    state: { workingFile },
    actions: { setWorkingFile, setConfirmModal }
  } = useGlobalState();

  const changeWorkingFile = () => {
    if (workingFile.name) {
      setConfirmModal({
        visible: true,
        onConfirm: () => setWorkingFile(item),
        message: "You have a working file right now, selecting a new one will overwrite any changes you've made"
      });
    } else {
      setWorkingFile(item);
    }
  };
  return (
    <div
      className="bg-base-300 m-2 p-1 max-w-[150px] rounded-md hover:scale-110 transition ease-in duration-150 hover: cursor-pointer"
      onClick={() => changeWorkingFile()}
    >
      <video className="rounded-md" src={URL.createObjectURL(item)} width={150} />
      <p className="truncate overflow-hidden">{item.name}</p>
    </div>
  );
};

export default MediaItem;
