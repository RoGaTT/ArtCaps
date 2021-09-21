/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Team.module.scss';
import Container from '@/utils/components/Container';
import TeamTextImg from '@/assets/img/texts/team.svg';
import TeamCard from '@/components/TeamCard';

import TeamCardChipImage1 from '@/assets/img/chips/team/1.png';
import TeamCardChipImage2 from '@/assets/img/chips/team/2.png';
import TeamCardChipImage3 from '@/assets/img/chips/team/3.png';
import TeamCardChipImage4 from '@/assets/img/chips/team/4.png';
import TeamCardChipImage5 from '@/assets/img/chips/team/5.png';
import TeamCardChipImage6 from '@/assets/img/chips/team/6.png';
import TeamCardChipImage7 from '@/assets/img/chips/team/7.png';
import TeamCardChipImage8 from '@/assets/img/chips/team/8.png';
import TeamCardChipImage9 from '@/assets/img/chips/team/9.png';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Team: FC<PropsType> = ({
  className,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [waitingDirection, setWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'left' | 'right' | null>(null);

  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, []);
  const memoOnClick = useCallback(onClick, [activeSlideIndex, waitingDirection, memoOnSwitch]);

  useEffect(() => {
    const interval = setInterval(() => {
      memoOnClick((activeSlideIndex + 1) % 2)();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlideIndex, memoOnClick]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <div className={clsx(classes.content)}>
        <div className={clsx(classes[`slide_${activeSlideIndex}`], 'animate__animated', memoGetAnimationClass(waitingDirection))}>
          {
            activeSlideIndex === 0 && (
              <>
                <div className={classes['slide_0--title']}>
                  <img src={TeamTextImg} alt="" />
                  <p>
                    ArtCaps is a community, which is passionate about crypto-art. We have nine team members, each making special contribution to the project’s development. We believe, that NFT – is the NEW art, which will leave its mark in the modern and world’s art.
                  </p>
                </div>
                <div className={classes['slide_0--items']}>
                  <TeamCard
                    img={TeamCardChipImage1}
                    nickname="Xcurseovoid"
                    role="Boss"
                    twitterBio="Xcurseovoid1"
                  />
                  <TeamCard
                    img={TeamCardChipImage2}
                    nickname="Nadin Ego"
                    role="Queen of glitch"
                    twitterBio="Nadinegotrip"
                  />
                  <TeamCard
                    img={TeamCardChipImage3}
                    nickname="Krasovski"
                    role="Katana Master"
                    twitterBio="KrasovskiArt"
                  />
                  <TeamCard
                    img={TeamCardChipImage4}
                    nickname="GPOT"
                    role="Cult kids"
                    twitterBio="GPotArt"
                  />
                </div>
              </>
            )
          }
          {
            activeSlideIndex === 1 && (
              <>
                <div className={classes['card-wrapper']}>
                  <TeamCard
                    img={TeamCardChipImage5}
                    nickname="M. Segal"
                    role="Art director"
                    twitterBio=""
                  />
                </div>
                <div className={classes.separator} />
                <div className={classes['card-wrapper']}>
                  <TeamCard
                    img={TeamCardChipImage6}
                    nickname="L9dnov"
                    role="SMO"
                    twitterBio=""
                  />
                </div>
                <div className={classes.separator} />
                <div className={classes['card-wrapper']}>
                  <TeamCard
                    img={TeamCardChipImage7}
                    nickname="Sou1mate"
                    role="Marketing Specialist"
                    twitterBio=""
                  />
                </div>
                <div className={classes['card-wrapper']}>
                  <TeamCard
                    img={TeamCardChipImage8}
                    nickname="RoGaTT"
                    role="CTO"
                    twitterBio=""
                  />
                </div>
                <div className={classes.separator} />
                <div className={classes['card-wrapper']}>
                  <TeamCard
                    img={TeamCardChipImage9}
                    nickname="ekyle"
                    role="Designer"
                    twitterBio=""
                  />
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
      </div>
    </Container>
  );

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

export default Team;
