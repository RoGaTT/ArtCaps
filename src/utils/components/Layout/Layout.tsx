/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';

import '@fontsource/press-start-2p';

import Modal from '@mui/material/Modal';
import { useCookies } from 'react-cookie';
import { Transition } from 'react-transition-group';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import classes from './Layout.module.scss';
import ModalContext, { ModalType, ModalTypeEnum, ModalTypeOptions } from '@/context/modal';
import MODAL_CONFIG from '@/const/modal_config';
import EastersContext, { EasterTypeEnum } from '@/context/easters';
import { CookiesEnum } from '@/types/cookies';
import { RELEASE_DATE } from '@/const/time';
import EasterPopoverImg from '@/assets/img/easter_popover.png';
import EasterPopoverFinalImg from '@/assets/img/easter_popover_final.png';
import EasterImg1 from '@/assets/img/easter_1.png';
import EasterImg2 from '@/assets/img/easter_2.png';
import ROUTES from '@/const/routes';

type PropsType = {
    children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  const easterPopoverTimerRef = useRef<NodeJS.Timer | null>(null);
  const [cookies, setCookie] = useCookies([CookiesEnum.EASTER_LIST, CookiesEnum.IS_EASTER_MODE_ACTIVATED]);

  const history = useHistory();

  const [modalList, setModalList] = useState<ModalType[]>([]);
  const [easterList, setEasterList] = useState<EasterTypeEnum[]>(cookies[CookiesEnum.EASTER_LIST] || []);
  const [isEasterModeActivated, setEasterModeActivatedState] = useState<boolean>(
    // cookies[CookiesEnum.IS_EASTER_MODE_ACTIVATED],
    false,
  );

  const [isActiveEasterPopover, setActiveEasterPopoverState] = useState<boolean | 'final'>(false);
  const handleOpenModal = useCallback(openModal, [modalList]);
  const handleCloseModal = useCallback(closeModal, [modalList]);
  const handleCloseAllModal = useCallback(closeAllModal, []);

  const handleShowPopover = useCallback(showPopover, [isActiveEasterPopover]);
  const handleShowTestPopover = useCallback(showTestPopover, [handleShowPopover]);
  const handleActivateEaster = useCallback(activateEaster, [easterList, handleShowPopover]);
  const handleActivateMode = useCallback(activateMode, []);
  const handleOnPopoverClick = useCallback(onPopoverClick, []);
  const handleOnEasterEggClick = useCallback(onEasterEggClick, [easterList.length, handleShowPopover, history]);

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
      showTestPopover: handleShowTestPopover,
    }}
    >
      <ModalContext.Provider value={{
        modalList,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
        closeAllModal: handleCloseAllModal,
      }}
      >
        {
          isEasterModeActivated && (
            <div
              onClick={handleOnEasterEggClick}
              className={clsx(classes.easterEgg, 'animate__animated', 'animate__pulse')}
            >
              <img src={easterList.length < 5 ? EasterImg1 : EasterImg2} alt="" />
            </div>
          )
        }
        <div className={classes.root}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
        <Transition
          in={isActiveEasterPopover === true}
          timeout={500}
          unmountOnExit
          mountOnEnter
        >
          {
            (state) => (
              <div
                onClick={handleOnPopoverClick}
                onDoubleClick={handleOnPopoverClick}
                className={clsx(classes.easterPopover, 'animate__animated', state !== 'exiting' ? 'animate__fadeInUpBig' : 'animate__fadeOutRight')}
              >
                <img
                  src={EasterPopoverImg}
                  alt=""
                />
              </div>
            )
          }
        </Transition>
        <Transition
          in={isActiveEasterPopover === 'final'}
          timeout={500}
          unmountOnExit
          mountOnEnter
        >
          {
            (state) => (
              <div
                onClick={handleOnPopoverClick}
                className={clsx(classes.easterPopover, 'animate__animated', state !== 'exiting' ? 'animate__fadeInUpBig' : 'animate__fadeOutRight')}
              >
                <img
                  src={EasterPopoverFinalImg}
                  alt=""
                />
              </div>
            )
          }
        </Transition>
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

  function showTestPopover() {
    handleShowPopover(false);
  }

  function onEasterEggClick() {
    history.push(ROUTES.EASTERS);
    if (easterList.length >= 5) handleShowPopover(true);
  }

  function onPopoverClick() {
    setActiveEasterPopoverState(false);
    if (easterPopoverTimerRef.current) {
      clearTimeout(easterPopoverTimerRef.current);
      easterPopoverTimerRef.current = null;
    }
  }
  function activateMode() {
    setEasterModeActivatedState(true);
  }
  function activateEaster(type: EasterTypeEnum) {
    if (!easterList.length) setEasterModeActivatedState(true);

    const newEasterList = Array.from(new Set([
      ...easterList,
      type,
    ]));

    setEasterList(newEasterList);
    handleShowPopover(newEasterList.length >= 5);
  }

  function showPopover(isFinal = false) {
    if (isActiveEasterPopover) {
      setActiveEasterPopoverState(false);
      if (easterPopoverTimerRef.current) {
        clearTimeout(easterPopoverTimerRef.current);
        easterPopoverTimerRef.current = null;
      }
      setTimeout(() => {
        setActiveEasterPopoverState(!isFinal ? true : 'final');
        easterPopoverTimerRef.current = setTimeout(() => {
          setActiveEasterPopoverState(false);
          if (easterPopoverTimerRef.current) clearTimeout(easterPopoverTimerRef.current);
        }, 9000);
      }, 500);
    } else {
      setActiveEasterPopoverState(!isFinal ? true : 'final');
      easterPopoverTimerRef.current = setTimeout(() => {
        setActiveEasterPopoverState(false);
        if (easterPopoverTimerRef.current) clearTimeout(easterPopoverTimerRef.current);
      }, 9000);
    }
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
