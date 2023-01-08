import React, { useEffect } from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import { useVideoRefState } from '../../../contexts/VideoRefContext';
import Waveform from './Waveform';

interface track {
  videoTrack: any;
  audioTrack: any;
  duration: null | number;
}

export const Timeline = () => {
  const {
    state: { workingFile }
  } = useGlobalState();

  const {
    actions: { setVideoRef, setAudioTrack },
    state: { videoRef, audioTrack }
  } = useVideoRefState();

  const track = { videoTrack: {}, audioTrack: {}, duration: null };

  const filterData = buffer => {
    const raw: any[] = buffer.getChannelData(0);
    const sampleSize = 512;
    const blockSize = Math.floor(raw.length / sampleSize);
    const filteredData: Number[] = [];

    for (let i = 0; i < sampleSize; i++) {
      const startingPoint = i * blockSize;
      const endingPoint = i * blockSize + blockSize;
      let max = 0;
      for (var j = startingPoint; j < endingPoint; j++) {
        if (raw[j] > max) {
          max = raw[j];
        }
      }
      filteredData.push(Math.abs(max) / 2);
    }

    setAudioTrack(filteredData);
  };

  const getAudioData = url => {
    const context = new AudioContext();
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => context.decodeAudioData(buffer))
      .then(buffer => {
        filterData(buffer);
      });
  };

  useEffect(() => {
    if (workingFile.name) {
      const url = URL.createObjectURL(workingFile);
      getAudioData(url);
    }
  }, [workingFile]);

  return (
    <div className="timeline-grid-cont">
      <div className="timeline-area-a"></div>
      <div className="timeline-area-b">{audioTrack && <Waveform />}</div>
    </div>
  );
};
