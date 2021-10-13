/* eslint-disable react/no-array-index-key */
/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import clsx from 'clsx';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import classes from './HowToGet.module.scss';
import Container from '@/utils/components/Container';

import HowToGetTextImg from '@/assets/img/texts/how_to_get.svg';
import ScrollMeImg from '@/assets/img/icons/scroll_me.svg';
import MintButton, { MintButtonStateEnum } from '@/ui/MintButton/MintButton';

interface PropsType {
  className?: string;
}

type Item = {
  text: () => JSX.Element,
  buttonState: MintButtonStateEnum
}

const itemList: Item[] = [
  {
    text: () => (<>Connect your MetaMask wallet to website</>),
    buttonState: MintButtonStateEnum.DEFAULT,
  },
  {
    text: () => (<>Press &quot;MINT&quot; on the ArtCaps main page</>),
    buttonState: MintButtonStateEnum.READY_SOON,
  },
  {
    text: () => (
      <>
        Make a payment of 0.06 ETH plus gas fee
      </>
    ),
    buttonState: MintButtonStateEnum.WITH_COINS,
  },
  {
    text: () => (<>Wait for the transaction to be confirmed and go to the section &quot;My ArtCaps&quot;</>),
    buttonState: MintButtonStateEnum.WAITING,
  },
  {
    text: () => (<>Admire your unique ArtCaps Tokens</>),
    buttonState: MintButtonStateEnum.FINAL,
  },
];

const HowToGet: FC<PropsType> = ({
  className,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [waitingDirection, setWaitingDirection] = useState<'up' | 'down' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'up' | 'down' | null>(null);

  const memoItemList = useMemo(() => itemList, []);

  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, []);
  const memoOnWheel = useCallback(onWheel, [activeItemIndex, waitingDirection, memoItemList.length, memoOnSwitch]);
  const memoOnMouseLeave = useCallback(onMouseLeave, []);
  const memoOnMouseEnter = useCallback(onMouseEnter, []);

  useEffect(() => {
    if (lastWaitingDirection) setLastWaitingDirection(null);
  }, [lastWaitingDirection]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
      id="how_to_get"
    >
      <img src={HowToGetTextImg} alt="" />
      <div
        className={clsx(classes.content, classes.noMobile)}
        onWheel={memoOnWheel}
        onMouseEnter={memoOnMouseEnter}
        onMouseLeave={memoOnMouseLeave}
      >
        <div className={clsx(classes.scrollMe, classes.noMobile)}>
          <img src={ScrollMeImg} alt="" />
          <span>Scroll me</span>
        </div>
        <div className={clsx(classes.item, 'animate__animated', memoGetAnimationClass(waitingDirection))}>
          <div>
            <span>{activeItemIndex + 1}</span>
            <span>{activeItemIndex + 1}</span>
          </div>
          <p>{memoItemList[activeItemIndex].text()}</p>
        </div>
        <MintButton
          type={memoItemList[activeItemIndex].buttonState}
          className={clsx('animate__animated', memoGetAnimationClass(waitingDirection))}
        />
      </div>
      <div className={clsx(classes.content, classes.onlyMobile)}>
        {
          itemList.map((item, itemIndex) => (
            <div className={clsx(classes.item)} key={`item_${itemIndex}`}>
              <div>
                <span>{itemIndex + 1}</span>
                <span>{itemIndex + 1}</span>
              </div>
              <p>{item.text()}</p>
            </div>
          ))
        }
      </div>
    </Container>
  );

  function onMouseEnter() {
    disablePageScroll();
  }
  function onMouseLeave() {
    enablePageScroll();
  }

  function onWheel(e: React.WheelEvent<HTMLDivElement>) {
    // eslint-disable-next-line max-len
    if (waitingDirection) return;
    if (e.deltaY > 0) {
      if (activeItemIndex < memoItemList.length - 1) memoOnSwitch('down', activeItemIndex + 1);
    } else if (activeItemIndex > 0) memoOnSwitch('up', activeItemIndex - 1);
  }

  function onSwitch(direction: 'up' | 'down', nextItemIndex: number) {
    setWaitingDirection(direction);
    setTimeout(() => {
      setActiveItemIndex(nextItemIndex);
      setLastWaitingDirection(direction);
      setWaitingDirection(null);
    }, 500);
  }

  function getAnimationClass(direction: 'up' | 'down' | null) {
    let className = 'animate__fadeInDown';
    if (direction) {
      if (direction === 'up') className = 'animate__fadeOutDown';
      else className = 'animate__fadeOutUp';
    } else if (lastWaitingDirection) {
      if (lastWaitingDirection === 'up') className = 'animate__fadeInDown';
      else className = 'animate__fadeInUp';
    }
    return className;
  }
};

export default HowToGet;
