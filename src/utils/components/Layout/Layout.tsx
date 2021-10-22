/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

import '@fontsource/press-start-2p';

import Modal from '@mui/material/Modal';
import { useCookies } from 'react-cookie';
import classes from './Layout.module.scss';
import ModalContext, { ModalType, ModalTypeEnum, ModalTypeOptions } from '@/context/modal';
import MODAL_CONFIG from '@/const/modal_config';
import EastersContext, { EasterTypeEnum } from '@/context/easters';
import { CookiesEnum } from '@/types/cookies';
import { RELEASE_DATE } from '@/const/time';

type PropsType = {
    children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  const [cookies, setCookie] = useCookies([CookiesEnum.EASTER_LIST, CookiesEnum.IS_EASTER_MODE_ACTIVATED]);

  const [modalList, setModalList] = useState<ModalType[]>([]);
  const [easterList, setEasterList] = useState<EasterTypeEnum[]>(cookies[CookiesEnum.EASTER_LIST] || []);
  const [isEasterModeActivated, setEasterModeActivatedState] = useState<boolean>(
    cookies[CookiesEnum.IS_EASTER_MODE_ACTIVATED],
  );

  const handleOpenModal = useCallback(openModal, [modalList]);
  const handleCloseModal = useCallback(closeModal, [modalList]);
  const handleCloseAllModal = useCallback(closeAllModal, []);

  const handleActivateEaster = useCallback(activateEaster, [easterList]);
  const handleActivateMode = useCallback(activateMode, []);

  useEffect(() => {
    setCookie(CookiesEnum.EASTER_LIST, easterList, {
      // maxAge: 60 * 60 * 24 * 10,
      expires: RELEASE_DATE,
    });
  }, [easterList, setCookie]);

  useEffect(() => {
    setCookie(CookiesEnum.IS_EASTER_MODE_ACTIVATED, isEasterModeActivated, {
      // maxAge: 60 * 60 * 24 * 10,
      expires: RELEASE_DATE,
    });
  }, [isEasterModeActivated, setCookie]);

  return (
    <EastersContext.Provider value={{
      easterList,
      isModeActive: isEasterModeActivated,
      activateEaster: handleActivateEaster,
      activateMode: handleActivateMode,
    }}
    >
      <ModalContext.Provider value={{
        modalList,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
        closeAllModal: handleCloseAllModal,
      }}
      >

        <div className={classes.root}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
        {
        modalList.map(({
          type, data,
        }) => (
          <Modal key={type} open>
            {
              MODAL_CONFIG[type](data)
            }
          </Modal>
        ))
      }
      </ModalContext.Provider>
    </EastersContext.Provider>
  );

  function activateMode() {
    setEasterModeActivatedState(true);
  }
  function activateEaster(type: EasterTypeEnum) {
    if (!easterList.length) setEasterModeActivatedState(true);
    setEasterList(Array.from(new Set([
      ...easterList,
      type,
    ])));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function openModal(type: ModalTypeEnum, data: any, onClose?: { (): void }) {
    return (options: ModalTypeOptions = {}) => {
      setModalList([
        ...modalList,
        {
          type,
          data,
          onClose,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...((options as unknown as any).target ? {} : options),
        },
      ]);
    };
  }
  function closeModal(type: ModalTypeEnum, onClose?: { (): void }) {
    return () => {
      onClose?.();
      setModalList(modalList.filter((el) => el.type !== type));
    };
  }
  function closeAllModal() {
    return () => {
      setModalList([]);
    };
  }
};

export default Layout;
