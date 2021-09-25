/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useState,
} from 'react';
import clsx from 'clsx';

import classes from './HiFromArtcaps.module.scss';
import Container from '@/utils/components/Container';
import HiFromArtCapsTextImg from '@/assets/img/texts/hi_from_artcaps.svg';
import HiFromArtCapsTextMobileImg from '@/assets/img/texts/hi_from_artcaps_mobile.svg';
import ArtCapsNftScreenImg from '@/assets/img/hi_from_artcaps/nft_screen.svg';
import ArtCapsPrizeImg from '@/assets/img/hi_from_artcaps/artcaps_prize.png';
import ArtCapsPrizeMobileImg from '@/assets/img/hi_from_artcaps/artcaps_prize_mobile.png';
import ArtCapsChipSetImg from '@/assets/img/hi_from_artcaps/chip_set.png';
import ArtCapsChipSetShortImg from '@/assets/img/hi_from_artcaps/chip_set_short.svg';
import HiFromArtCapsChip1Img from '@/assets/img/chips/hi_from_artcaps_1.svg';
import HiFromArtCapsChip2Img from '@/assets/img/chips/hi_from_artcaps_2.svg';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const HiFromArtcaps: FC<PropsType> = ({
  className,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [waitingDirection, setWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<null | number>(null);

  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, []);
  const memoOnClick = useCallback(onClick, [activeSlideIndex, waitingDirection, memoOnSwitch]);
  const memoOnTouchStart = useCallback(onTouchStart, []);
  const memoOnTouchEnd = useCallback(onTouchEnd, [activeSlideIndex, memoOnClick, touchStart]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     memoOnClick((activeSlideIndex + 1) % 3)();
  //   }, 10000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [activeSlideIndex, memoOnClick]);

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
                    A unique NFT-token collection is already here! Are you ready? Tie your wallet to start the game! 30 000 unique tokens from various artists! Start your own collection!
                  </p>
                </div>
                <div className={classes['slide_0--chips']}>
                  <img src={HiFromArtCapsChip1Img} className={classes['chip-main']} alt="" />
                  <img src={HiFromArtCapsChip2Img} className={classes['chip-extra']} alt="" />
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 1 && (
              <>
                <div className="">
                  <p>Our team not only wants to show how unique and multifaceted the universe of NFT is but also introduce you to the world of interesting and young authors.</p>
                  <img src={ArtCapsNftScreenImg} alt="" />
                </div>
                <div className="">
                  <img src={ArtCapsPrizeImg} alt="" />
                  <p>As the project evolves we are planning to launch cool events for our NFT-gang. You will be able to participate in competitions and receive awesome goodies from our artists.</p>
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 2 && (
              <>
                <p>
                  Here’s a bonus for y’all - be one of the first to make a purchase and get 4 items for the price of 1.
                </p>
                <img src={ArtCapsChipSetImg} alt="" />
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
                  <img src={HiFromArtCapsChip2Img} alt="" />
                </div>
                <p>
                  A unique NFT-token collection is already here! Are you ready? Tie your wallet to start the game! 30 000 unique tokens from various artists! Start your own collection!
                </p>
              </>
            )
          }
          {
            activeSlideIndex === 1 && (
              <>
                <img src={ArtCapsNftScreenImg} alt="" />
                <p>
                  Our team not only wants to show how unique and multifaceted the universe of NFT is but also introduce you to the world of interesting and young authors.
                </p>
              </>
            )
          }
          {
            activeSlideIndex === 2 && (
              <>
                <img src={ArtCapsPrizeMobileImg} alt="" />
                <p>
                  As the project evolves we are planning to launch cool events for our NFT-gang. You will be able to participate in competitions and receive awesome goodies from our artists.
                </p>
              </>
            )
          }
          {
            activeSlideIndex === 3 && (
              <>
                <img src={ArtCapsChipSetShortImg} alt="" />
                <p className={classes.big}>
                  Here’s a bonus for y’all – be one of the first to make a purchase and get 4 items for the price of 1.
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

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.touches[0].clientX);
  }
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if ((touchStart !== null) && (touchStart > e.changedTouches[0].pageX)) {
      memoOnClick((activeSlideIndex + 1) % 4)();
    } else if ((touchStart !== null) && (touchStart < e.changedTouches[0].pageX)) {
      memoOnClick(activeSlideIndex === 0 ? 3 : (activeSlideIndex - 1) % 4)();
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
