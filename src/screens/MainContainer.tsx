import React, { useState, useEffect } from 'react';
import { Button, Modal, Theme } from 'react-daisyui';
import { useGlobalState } from '../contexts/StateContext';
import TopNav from './global/TopNav';
import VideoEditorContainer from './videoEditor/VideoEditorContainer';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import Loading from './global/Loading';

const MainContainer = () => {
  const [ready, setReady] = useState(false);
  const ffmpeg = createFFmpeg({ log: true });
  const {
    state: { theme, confirmModal },
    actions: { setConfirmModal }
  } = useGlobalState();

  const loadFFmpeg = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    loadFFmpeg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Theme dataTheme={theme}>
      <Loading hide={ready} />
      <div className="h-screen">
        <Modal open={confirmModal.visible}>
          <Modal.Header className="font-bold">Hold up!</Modal.Header>
          <Modal.Body>{confirmModal.message}</Modal.Body>
          <Modal.Actions>
            <Button
              color="primary"
              onClick={() => {
                confirmModal.onConfirm();
                setConfirmModal({ visible: false, onConfirm: () => {}, message: '' });
              }}
            >
              Ok
            </Button>
            <Button
              color="secondary"
              variant="outline"
              onClick={() => {
                setConfirmModal({ visible: false, onConfirm: () => {}, message: '' });
              }}
            >
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
        <TopNav />
        <VideoEditorContainer />
      </div>
    </Theme>
  );
};

export default MainContainer;
