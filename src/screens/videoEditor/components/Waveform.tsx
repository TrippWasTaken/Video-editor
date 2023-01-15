import React, { useEffect, useRef, useState } from 'react';
import { useGlobalState } from '../../../contexts/StateContext';
import { useVideoRefState } from '../../../contexts/VideoRefContext';

const Waveform = () => {
  const containerRef = useRef<HTMLCanvasElement>(null);

  const {
    state: { audioTrack, videoRef }
  } = useVideoRefState();

  const {
    state: { workingFile }
  } = useGlobalState();

  const drawWaveForm = () => {
    const pixelRatio = window.devicePixelRatio || 1;
    const c = containerRef.current;

    if (c) {
      const ctx: CanvasRenderingContext2D = c.getContext('2d');
      c.width = audioTrack.length;
      c.height = 100;
      ctx.lineWidth = 1;
      const drawHeight = c.height / 2;

      ctx.clearRect(0, 0, audioTrack.length, 100);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      for (let i = 0; i < audioTrack.length; i++) {
        const pLine = audioTrack[i] * drawHeight;
        ctx.fillRect(i, c.height / 2, 1, pLine + 1);
        ctx.fillRect(i, c.height / 2, 1, -pLine);
      }
    }
  };

  useEffect(() => {
    drawWaveForm();
  }, [audioTrack]);

  return (
    <canvas
      ref={containerRef}
      className="bg-primary"
      onClick={() => {
        console.log('ref outta', videoRef);
      }}
    />
  );
};

export default Waveform;
