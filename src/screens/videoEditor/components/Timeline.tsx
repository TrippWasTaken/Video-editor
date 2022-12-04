import React from 'react';
import { useGlobalState } from '../../../contexts/StateContext';

export const Timeline = () => {
  const {
    state: { workingFile }
  } = useGlobalState();
  return <div>Timeline</div>;
};
