/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export enum ModalTypeEnum {
  FINAL = 'final'
}

export type ModalTypeOptions = {
  isClosingDisabled?: boolean,
  classes?: { [key: string]: string },
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
}

export type ModalType = ModalTypeOptions & {
  type: ModalTypeEnum,
  data: any,
  onClose?: { (): void },
}

type ModalContextType = {
  modalList: ModalType[],
  openModal: { (type: ModalTypeEnum, data: any, onClose?: { (): void }): () => void },
  closeModal: { (type: ModalTypeEnum): () => void },
  closeAllModal: { (): () => void }
}

const ModalContext = React.createContext<ModalContextType>({
  modalList: [],
  openModal: () => () => null,
  closeModal: () => () => null,
  closeAllModal: () => () => null,
});

export default ModalContext;
