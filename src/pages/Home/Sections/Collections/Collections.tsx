/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import { Transition } from 'react-transition-group';
import classes from './Collections.module.scss';
import Container from '@/utils/components/Container';

import CollectionsTextImg from '@/assets/img/texts/collections.svg';

import CollectionsChipImg_1_1 from '@/assets/img/chips/1/1.png';
import CollectionsChipImg_1_2 from '@/assets/img/chips/1/2.png';
import CollectionsChipImg_1_3 from '@/assets/img/chips/1/3.png';
import CollectionsChipImg_1_4 from '@/assets/img/chips/1/4.png';
import CollectionsChipImg_1_5 from '@/assets/img/chips/1/5.png';
import CollectionsChipImg_1_6 from '@/assets/img/chips/1/6.png';
import CollectionsChipImg_1_7 from '@/assets/img/chips/1/7.png';
import CollectionsChipImg_1_8 from '@/assets/img/chips/1/8.png';
import CollectionsChipImg_1_9 from '@/assets/img/chips/1/9.png';
import CollectionsChipImg_1_10 from '@/assets/img/chips/1/10.png';
import CollectionsChipImg_2_1 from '@/assets/img/chips/2/1.png';
import CollectionsChipImg_2_2 from '@/assets/img/chips/2/2.png';
import CollectionsChipImg_2_3 from '@/assets/img/chips/2/3.png';
import CollectionsChipImg_2_4 from '@/assets/img/chips/2/4.png';
import CollectionsChipImg_2_5 from '@/assets/img/chips/2/5.png';
import CollectionsChipImg_2_6 from '@/assets/img/chips/2/6.png';
import CollectionsChipImg_2_7 from '@/assets/img/chips/2/7.png';
import CollectionsChipImg_2_8 from '@/assets/img/chips/2/8.png';
import CollectionsChipImg_2_9 from '@/assets/img/chips/2/9.png';
import CollectionsChipImg_2_10 from '@/assets/img/chips/2/10.png';
import CollectionsChipImg_3_1 from '@/assets/img/chips/3/1.png';
import CollectionsChipImg_3_2 from '@/assets/img/chips/3/2.png';
import CollectionsChipImg_3_3 from '@/assets/img/chips/3/3.png';
import CollectionsChipImg_3_4 from '@/assets/img/chips/3/4.png';
import CollectionsChipImg_3_5 from '@/assets/img/chips/3/5.png';
import CollectionsChipImg_3_6 from '@/assets/img/chips/3/6.png';
import CollectionsChipImg_3_7 from '@/assets/img/chips/3/7.png';
import CollectionsChipImg_3_8 from '@/assets/img/chips/3/8.png';
import CollectionsChipImg_3_9 from '@/assets/img/chips/3/9.png';
import CollectionsChipImg_3_10 from '@/assets/img/chips/3/10.png';
import CollectionChipBackImg from '@/assets/img/chips/back.png';
import useResize from '@/utils/hooks/useResize';

interface PropsType {
  className?: string;
}

const CARD_LIST = [
  [
    CollectionsChipImg_1_1,
    CollectionsChipImg_1_2,
    CollectionsChipImg_1_3,
    CollectionsChipImg_1_4,
    CollectionsChipImg_1_5,
    CollectionsChipImg_1_6,
    CollectionsChipImg_1_7,
    CollectionsChipImg_1_8,
    CollectionsChipImg_1_9,
    CollectionsChipImg_1_10,
  ],
  [
    CollectionsChipImg_2_1,
    CollectionsChipImg_2_2,
    CollectionsChipImg_2_3,
    CollectionsChipImg_2_4,
    CollectionsChipImg_2_5,
    CollectionsChipImg_2_6,
    CollectionsChipImg_2_7,
    CollectionsChipImg_2_8,
    CollectionsChipImg_2_9,
    CollectionsChipImg_2_10,
  ],
  [
    CollectionsChipImg_3_1,
    CollectionsChipImg_3_2,
    CollectionsChipImg_3_3,
    CollectionsChipImg_3_4,
    CollectionsChipImg_3_5,
    CollectionsChipImg_3_6,
    CollectionsChipImg_3_7,
    CollectionsChipImg_3_8,
    CollectionsChipImg_3_9,
    CollectionsChipImg_3_10,
  ],
];

type ItemConfig = {
  isOpening: boolean,
  isClosing: boolean,
  imgIndex: number,
}

const Collections: FC<PropsType> = ({
  className,
}) => {
  const [activeItem, setActiveItem] = useState(0);
  const [itemList, setItemIndexList] = useState<ItemConfig[]>([
    {
      isOpening: true,
      isClosing: false,
      imgIndex: 0,
    },
    {
      isOpening: false,
      isClosing: true,
      imgIndex: 0,
    },
    {
      isOpening: false,
      isClosing: true,
      imgIndex: 0,
    },
  ]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [waitingDirection, setWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<null | number>(null);
  const [slideImgIndexList, setSlideImgIndexList] = useState<number[]>([0, 0, 0]);
  const [isSlideChanging, setSlideChangingState] = useState<boolean>(false);

  const size = useResize();

  const memoUpdateItem = useCallback(updateItem, [itemList]);
  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, []);
  const memoOnClick = useCallback(onClick, [activeSlideIndex, waitingDirection, memoOnSwitch]);
  const memoOnTouchStart = useCallback(onTouchStart, []);
  const memoOnTouchEnd = useCallback(onTouchEnd, [activeSlideIndex, memoOnClick, touchStart]);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (size.width > 450) {
      interval = setInterval(() => {
        setActiveItem((activeItem + 1) % 3);
      }, 3000);
    } else {
      interval = setInterval(() => {
        setSlideChangingState(true);
        setTimeout(() => {
          const buffer = [...slideImgIndexList];
          buffer[activeSlideIndex] = (buffer[activeSlideIndex] + 1) % CARD_LIST[activeSlideIndex].length;
          setSlideImgIndexList(buffer);
          setSlideChangingState(false);
        }, 500);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeItem, activeSlideIndex, size.width, slideImgIndexList]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <div className={classes.title}>
        <img src={CollectionsTextImg} alt="" />
        <p>
          ArtCaps offers 3 different token collections from three original painters. Each collection consists of 10000 AI-generated collectibles popping on the Ethereum Blockchain
        </p>
      </div>
      {
        size.width > 450 && (
          <div className={clsx(classes.cards, classes.noMobile)}>
            <div className={clsx(classes['cards-item'])}>
              {/* <TransitionGroup> */}
              <Transition
                in={!itemList[0].isClosing && activeItem === 0}
                timeout={500}
                unmountOnExit
                onEnter={memoUpdateItem(0, [true, false])}
                onExited={memoUpdateItem(0, [false, true])}
              >
                {
                  (state) => (
                    <img src={CARD_LIST[0][itemList[0].imgIndex]} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
              </Transition>
              <Transition
                in={!itemList[0].isOpening && activeItem !== 0}
                timeout={500}
                unmountOnExit
                onEnter={memoUpdateItem(0, [false, true], true)}
                onExited={memoUpdateItem(0, [true, false])}
              >
                {
                  (state) => (
                    <img src={CollectionChipBackImg} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
              </Transition>
              {/* </TransitionGroup> */}
              <div className={classes['cards-item__text']}>
                <h6>Queen of Glitch</h6>
                <p>Nadin Ego</p>
              </div>
            </div>
            <div className={classes['cards-item']}>
              <Transition
                in={!itemList[1].isClosing && activeItem === 1}
                timeout={500}
                unmountOnExit
                onEnter={memoUpdateItem(1, [true, false])}
                onExited={memoUpdateItem(1, [false, true])}
              >
                {
                  (state) => (
                    <img src={CARD_LIST[1][itemList[1].imgIndex]} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
              </Transition>
              <Transition
                in={!itemList[1].isOpening && activeItem !== 1}
                timeout={500}
                unmountOnExit
                onEnter={memoUpdateItem(1, [false, true], true)}
                onExited={memoUpdateItem(1, [true, false])}
              >
                {
                  (state) => (
                    <img src={CollectionChipBackImg} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
              </Transition>
              <div className={classes['cards-item__text']}>
                <h6>
                  Cult
                  {' '}
                  <br />
                  {' '}
                  Kids
                </h6>
                <p>GPOT</p>
              </div>
            </div>
            <div className={classes['cards-item']}>
              <Transition
                in={!itemList[2].isClosing && activeItem === 2}
                timeout={500}
                unmountOnExit
                onEnter={memoUpdateItem(2, [true, false])}
                onExited={memoUpdateItem(2, [false, true])}
              >
                {
                  (state) => (
                    <img src={CARD_LIST[2][itemList[2].imgIndex]} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
              </Transition>
              <Transition
                in={!itemList[2].isOpening && activeItem !== 2}
                timeout={500}
                unmountOnExit
                onEnter={memoUpdateItem(2, [false, true], true)}
                onExited={memoUpdateItem(2, [true, false])}
              >
                {
                  (state) => (
                    <img src={CollectionChipBackImg} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
              </Transition>
              <div className={classes['cards-item__text']}>
                <h6>
                  Katana
                  <br />
                  Master
                </h6>
                <p>Krasovski</p>
              </div>
            </div>
          </div>
        )
      }
      <div className={clsx(classes.cards, classes.onlyMobile)} onTouchStart={memoOnTouchStart} onTouchEnd={memoOnTouchEnd}>
        <div className={
          clsx(
            classes.mobileSlide,
            'animate__animated',
            classes.onlyMobile,
            memoGetAnimationClass(waitingDirection),
          )
        }
        >
          {
            activeSlideIndex === 0 && (
              <>
                <Transition
                  in={!isSlideChanging}
                  timeout={500}
                  unmountOnExit
                  mountOnEnter
                >
                  {
                  (state) => (
                    <img src={CARD_LIST[0][slideImgIndexList[0]]} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
                </Transition>
                <div className={classes['cards-item__text']}>
                  <h6>Queen of Glitch</h6>
                  <p>Nadin Ego</p>
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 1 && (
              <>
                <Transition
                  in={!isSlideChanging}
                  timeout={500}
                  unmountOnExit
                  mountOnEnter
                >
                  {
                  (state) => (
                    <img src={CARD_LIST[1][slideImgIndexList[1]]} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
                </Transition>
                <div className={classes['cards-item__text']}>
                  <h6>
                    Cult
                    {' '}
                    <br />
                    {' '}
                    Kids
                  </h6>
                  <p>GPOT</p>
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 2 && (
              <>
                <Transition
                  in={!isSlideChanging}
                  timeout={500}
                  unmountOnExit
                  mountOnEnter
                >
                  {
                  (state) => (
                    <img src={CARD_LIST[2][slideImgIndexList[2]]} alt="" className={clsx('animate__animated', state !== 'exiting' ? 'animate__flipInY' : 'animate__flipOutY')} />
                  )
                }
                </Transition>
                <div className={classes['cards-item__text']}>
                  <h6>
                    Katana
                    <br />
                    Master
                  </h6>
                  <p>Krasovski</p>
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className={classes.controls}>
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 0 && classes['controls-item__active'],
            )
          }
          onClick={memoOnClick(0)}
        />
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 1 && classes['controls-item__active'],
            )
          }
          onClick={memoOnClick(1)}
        />
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 2 && classes['controls-item__active'],
            )
          }
          onClick={memoOnClick(2)}
        />
      </div>
    </Container>
  );

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.touches[0].clientX);
  }
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStart === null) return;

    if (Math.abs(touchStart - e.changedTouches[0].pageX) <= 80) return;

    if ((touchStart !== null) && (touchStart > e.changedTouches[0].pageX)) {
      memoOnClick((activeSlideIndex + 1) % 3)();
      setTouchStart(null);
    } else if ((touchStart !== null) && (touchStart < e.changedTouches[0].pageX)) {
      memoOnClick(activeSlideIndex === 0 ? 2 : (activeSlideIndex - 1) % 3)();
      setTouchStart(null);
    }
  }

  function updateItem(index: number, state: [boolean, boolean], isClosing = false) {
    return () => {
      let buffer = [...itemList];
      buffer[index] = {
        ...buffer[index],
        isOpening: state[0],
        isClosing: state[1],
      };

      if (index === 2 && isClosing) {
        buffer = buffer.map((item, itemIndex) => ({
          ...item,
          imgIndex: (buffer[itemIndex].imgIndex + 1) % CARD_LIST[itemIndex].length,
        }));
      }

      setItemIndexList(buffer);

      // if (needTimerToClose) {
      //   setTimeout(() => {
      //     const buffer = [...itemList];
      //     buffer[index] = {
      //       ...buffer[index],
      //       isOpening: false,
      //       isClosing: false,
      //     };

      //     setItemIndexList(buffer);
      //   }, 2000);
      // }
    };
  }

  function onClick(index: number) {
    return () => {
      // eslint-disable-next-line max-len
      if (waitingDirection) return;
      if (index > activeSlideIndex) memoOnSwitch('right', index);
      else memoOnSwitch('left', index);
    };
  }

  function onSwitch(direction: 'left' | 'right', nextItemIndex: number) {
    setWaitingDirection(direction);
    setTimeout(() => {
      setActiveSlideIndex(nextItemIndex);
      setLastWaitingDirection(direction);
      setWaitingDirection(null);
    }, 500);
  }

  function getAnimationClass(direction: 'left' | 'right' | null) {
    let className = 'animate__fadeInLeft';
    if (direction) {
      if (direction === 'left') className = 'animate__fadeOutRight';
      else className = 'animate__fadeOutLeft';
    } else if (lastWaitingDirection) {
      if (lastWaitingDirection === 'left') className = 'animate__fadeInLeft';
      else className = 'animate__fadeInRight';
    }
    return className;
  }
};

export default Collections;
