/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext } from 'react';
import classes from './FinalModal.module.scss';
import ModalContext from '@/context/modal';

export type FinalModalData = {
}

const FinalModal: React.FC<FinalModalData> = ({
}) => {
  const { openModal, closeModal } = useContext(ModalContext);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <span>dasda</span>
      </div>
    </div>
  );
};

export default FinalModal;
