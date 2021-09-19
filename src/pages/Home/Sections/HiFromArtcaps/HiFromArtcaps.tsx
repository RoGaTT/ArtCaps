/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';

import classes from './HiFromArtcaps.module.scss';
import Container from '@/utils/components/Container';
import HiFromArtCapsTextImg from '@/assets/img/texts/hi_from_artcaps.svg';
import ArtCapsNftScreenImg from '@/assets/img/hi_from_artcaps/nft_screen.svg';
import ArtCapsPrizeImg from '@/assets/img/hi_from_artcaps/artcaps_prize.png';
import ArtCapsChipSetImg from '@/assets/img/hi_from_artcaps/chip_set.png';
import HiFromArtCapsChip1Img from '@/assets/img/chips/hi_from_artcaps_1.svg';
import HiFromArtCapsChip2Img from '@/assets/img/chips/hi_from_artcaps_2.svg';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const HiFromArtcaps: FC<PropsType> = ({
  className,
}) => {
  const timerIntervalRef = useRef<null | NodeJS.Timer>(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(2);

  const memoSetSlide = useCallback((slideIndex: number) => () => {
    setActiveSlideIndex(slideIndex);
  }, []);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <div className={clsx(classes.content)}>
        <div className={clsx(classes[`slide_${activeSlideIndex}`])}>
          {
            activeSlideIndex === 0 && (
              <>
                <div className={classes['slide_0--content']}>
                  <img src={HiFromArtCapsTextImg} alt="" />
                  <p>
                    A collection of unique NFT chips is here! Are you ready? Connect your wallet to start the game! 30,000 unique tokens from different artists. Collect your collection.
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
                  <p>Our team wants to show how unique and diverse the NFT universe is, as well as introduce the world to interesting young authors.</p>
                  <img src={ArtCapsNftScreenImg} alt="" />
                </div>
                <div className="">
                  <img src={ArtCapsPrizeImg} alt="" />
                  <p>As the project develops, we will launch cool events within our NFT gang. Prize raffles await you, where you can receive exclusive nishtyachki from our artists.</p>
                </div>
              </>
            )
          }
          {
          activeSlideIndex === 2 && (
            <>
              <p>
                And here is a small bonus –
                be one of the first to make a purchase and get 4 items for the price of one.
              </p>
              <img src={ArtCapsChipSetImg} alt="" />
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
          onClick={memoSetSlide(0)}
        />
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 1 && classes['controls-item__active'],
            )
          }
          onClick={memoSetSlide(1)}
        />
        <div
          className={
            clsx(
              classes['controls-item'],
              activeSlideIndex === 2 && classes['controls-item__active'],
            )
          }
          onClick={memoSetSlide(2)}
        />
      </div>
    </Container>
  );
};

export default HiFromArtcaps;
