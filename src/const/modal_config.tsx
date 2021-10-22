/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ModalTypeEnum } from '@/context/modal';

const MODAL_CONFIG = {
  [ModalTypeEnum.FINAL]: (data: any): JSX.Element => (
    <span>dasdas</span>
  ),
};

export default MODAL_CONFIG;
