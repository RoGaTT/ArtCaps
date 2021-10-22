/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useContext, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import { Transition } from 'react-transition-group';
import classes from './HiFromArtcaps.module.scss';
import Container from '@/utils/components/Container';
import HiFromArtCapsTextImg from '@/assets/img/texts/hi_from_artcaps.svg';
import HiFromArtCapsTextMobileImg from '@/assets/img/texts/hi_from_artcaps_mobile.svg';
import ArtCapsNftScreenImg from '@/assets/img/hi_from_artcaps/nft_screen.svg';
import ArtCapsPrizeImg from '@/assets/img/hi_from_artcaps/artcaps_prize.png';
import ArtCapsPrizeMobileImg from '@/assets/img/hi_from_artcaps/artcaps_prize_mobile.png';
import ArtCapsChipSetImg from '@/assets/img/hi_from_artcaps/chip_set.png';
import ArtCapsChipSetShortImg from '@/assets/img/hi_from_artcaps/chip_set_short.png';
import HiFromArtCapsChip1Img from '@/assets/img/chips/hi_from_artcaps_1.png';

import CollectionsChipImg_1_4 from '@/assets/img/chips/1/4.png';
import CollectionsChipImg_2_4 from '@/assets/img/chips/2/4.png';
import CollectionsChipImg_3_4 from '@/assets/img/chips/3/4.png';
import useResize from '@/utils/hooks/useResize';
import EastersContext, { EasterTypeEnum } from '@/context/easters';

const CHIP_LIST = [
  CollectionsChipImg_1_4,
  CollectionsChipImg_2_4,
  CollectionsChipImg_3_4,
];

interface PropsType {
  className?: string;
}

const HiFromArtcaps: FC<PropsType> = ({
  className,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [waitingDirection, setWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<null | number>(null);
  const [activeSlideChipIndex, setActiveSlideChipIndex] = useState(0);
  const [isSlideChipChanging, setSlideChipChanging] = useState(false);

  const size = useResize();
  const eastersContext = useContext(EastersContext);

  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, []);
  const memoOnClick = useCallback(onClick, [activeSlideIndex, waitingDirection, memoOnSwitch]);
  const memoOnTouchStart = useCallback(onTouchStart, []);
  const memoOnTouchEnd = useCallback(onTouchEnd, [activeSlideIndex, memoOnClick, touchStart]);
  const memoSetNextActiveSlideChip = useCallback(setNextActiveSlideChip, [activeSlideChipIndex]);
  const memoActivateEaster = useCallback(activateEaster, [eastersContext]);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (size.width > 450) {
      interval = setInterval(() => {
        setSlideChipChanging(true);
        setTimeout(() => {
          setActiveSlideIndex(activeSlideIndex % CHIP_LIST.length);
        }, 500);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeSlideIndex, memoOnClick, size.width]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <div className={clsx(classes.onlyMobile, classes.title)}>
        <img src={HiFromArtCapsTextMobileImg} alt="" />
      </div>
      <div className={clsx(classes.content)}>
        <div className={
          clsx(
            classes[`slide_${activeSlideIndex}`],
            'animate__animated',
            classes.noMobile,
            memoGetAnimationClass(waitingDirection),
          )
        }
        >
          {
            activeSlideIndex === 0 && (
              <>
                <div className={classes['slide_0--content']}>
                  <img src={HiFromArtCapsTextImg} alt="" />
                  <p>
                    A unique NFT collection is already here! Over 30,000 unique tokens from multiple artists! Are you ready? Connect your wallet and start your own collection!
                  </p>
                </div>
                <div className={classes['slide_0--chips']}>
                  <img src={HiFromArtCapsChip1Img} className={classes['chip-main']} alt="" />
                  {/* <img src={HiFromArtCapsChip2Img} className={classes['chip-extra']} alt="" /> */}
                  <Transition
                    in={!isSlideChipChanging}
                    timeout={800}
                    unmountOnExit
                    mountOnEnter
                    onExited={memoSetNextActiveSlideChip}
                  >
                    {
                    (state) => (
                      <img src={CHIP_LIST[activeSlideChipIndex]} className={clsx(classes['chip-extra'], classes[state])} alt="" />
                    )
                  }
                  </Transition>
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 1 && (
              <>
                <div className="">
                  <p>Win an extra NFT in our unique ArtCaps Game. You can play right after Mint! Don&apos;t miss your chance, participation is free!</p>
                  <img src={ArtCapsNftScreenImg} alt="" />
                </div>
                <div className="">
                  <img src={ArtCapsPrizeImg} alt="" />
                  <p>As the project evolves we will launch cool events for our NFT-gang. You will be able to participate in competitions and receive limited-edition goodies from our artists.</p>
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 2 && (
              <>
                <p>
                  Be among the first to make a purchase, and get 3 more special NFT-materials for the price of 1.
                </p>
                <div className={classes.easter}>
                  <img src={ArtCapsChipSetImg} alt="" />
                  <div onClick={memoActivateEaster} />
                </div>
              </>
            )
          }
        </div>
        <div
          className={
          clsx(
            classes.mobileSlide,
            'animate__animated',
            classes.onlyMobile,
            memoGetAnimationClass(waitingDirection),
          )
        }
          onTouchStart={memoOnTouchStart}
          onTouchEnd={memoOnTouchEnd}
        >
          {
            activeSlideIndex === 0 && (
              <>
                <div>
                  <img src={HiFromArtCapsChip1Img} alt="" />
                  <Transition
                    in={!isSlideChipChanging}
                    timeout={800}
                    unmountOnExit
                    mountOnEnter
                    onExited={memoSetNextActiveSlideChip}
                  >
                    {
                    (state) => (
                      <img src={CHIP_LIST[activeSlideChipIndex]} className={classes[state]} alt="" />
                    )
                  }
                  </Transition>
                  {/* <img src={HiFromArtCapsChip2Img} alt="" /> */}
                </div>
                <p>
                  A unique NFT collection is already here! Over 30,000 unique tokens from multiple artists! Are you ready? Connect your wallet and start your own collection!
                </p>
              </>
            )
          }
          {
            activeSlideIndex === 1 && (
              <>
                <img src={ArtCapsNftScreenImg} alt="" />
                <p>
                  Win an extra NFT in our unique ArtCaps Game. You can play right after Mint! Don&apos;t miss your chance, participation is free!
                </p>
              </>
            )
          }
          {
            activeSlideIndex === 2 && (
              <>
                <img src={ArtCapsPrizeMobileImg} alt="" />
                <p>
                  As the project evolves we will launch cool events for our NFT-gang. You will be able to participate in competitions and receive limited-edition goodies from our artists.
                </p>
              </>
            )
          }
          {
            activeSlideIndex === 3 && (
              <>
                <img src={ArtCapsChipSetShortImg} alt="" />
                <p className={classes.big}>
                  Be among the first to make a purchase, and get 3 more special NFT-materials for the price of 1.
                </p>
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
        <div
          className={
            clsx(
              classes['controls-item'],
              classes.onlyMobile,
              activeSlideIndex === 3 && classes['controls-item__active'],
            )
          }
          onClick={memoOnClick(3)}
        />
      </div>
    </Container>
  );

  function activateEaster(): void {
    if (!eastersContext.isModeActive || eastersContext.easterList.includes(EasterTypeEnum.CHIP_SET_ITEM)) return;
    eastersContext.activateEaster(EasterTypeEnum.CHIP_SET_ITEM);
  }

  function setNextActiveSlideChip() {
    setActiveSlideChipIndex((activeSlideChipIndex + 1) % CHIP_LIST.length);
    setSlideChipChanging(false);
  }

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.touches[0].clientX);
  }
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStart === null) return;

    if (Math.abs(touchStart - e.changedTouches[0].pageX) <= 80) return;

    if ((touchStart !== null) && (touchStart > e.changedTouches[0].pageX)) {
      memoOnClick((activeSlideIndex + 1) % 4)();
      setTouchStart(null);
    } else if ((touchStart !== null) && (touchStart < e.changedTouches[0].pageX)) {
      memoOnClick(activeSlideIndex === 0 ? 3 : (activeSlideIndex - 1) % 4)();
      setTouchStart(null);
    }
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

export default HiFromArtcaps;
