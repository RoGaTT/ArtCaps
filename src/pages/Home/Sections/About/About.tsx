/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import { Transition } from 'react-transition-group';
import classes from './About.module.scss';
import Container from '@/utils/components/Container';
import AboutChip1Img from '@/assets/img/chips/hi_from_artcaps_1.png';

import CollectionsChipImg_1_4 from '@/assets/img/chips/1/4.png';
import CollectionsChipImg_2_4 from '@/assets/img/chips/2/4.png';
import CollectionsChipImg_3_4 from '@/assets/img/chips/3/4.png';
import Title from '@/ui/Title';
import Collections from './components/Collections';

const CHIP_LIST = [
  CollectionsChipImg_1_4,
  CollectionsChipImg_2_4,
  CollectionsChipImg_3_4,
];

interface PropsType {
  className?: string;
}

const About: FC<PropsType> = ({
  className,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideChipIndex, setActiveSlideChipIndex] = useState(0);
  const [isSlideChipChanging, setSlideChipChanging] = useState(false);

  const memoSetNextActiveSlideChip = useCallback(setNextActiveSlideChip, [activeSlideChipIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideChipChanging(true);
      setTimeout(() => {
        setActiveSlideIndex(activeSlideIndex % CHIP_LIST.length);
      }, 500);
    }, 4000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeSlideIndex]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
      id="about"
    >
      <Title
        className={classes.title}
      >
        About
      </Title>
      <div className={clsx(classes.content)}>
        <p className={classes.text}>
          Welcome to the battle of 10 000 ArtCaps! — with these words, the story began.
          <br />
          <br />
          There were three worlds in which powerful rulers ruled:
          {' '}
          <span className={classes.pink}>Queen of Glitch</span>
          ,
          {' '}
          <span className={classes.yellow}>Cult Kid</span>
          {' '}
          and
          {' '}
          <span className={classes.green}>Katana Master</span>
          .
          <br />
          <br />
          They maintained peace and harmony in their universes. But everything changed when the GameMaster decided to start a war.
          <br />
          <br />
          <span>Choose your side, create your warrior and change the outcome of the war!</span>
        </p>
        <div className={classes.chips}>
          <img src={AboutChip1Img} className={classes['chips-main']} alt="" />
          <Transition
            in={!isSlideChipChanging}
            timeout={800}
            unmountOnExit
            mountOnEnter
            onExited={memoSetNextActiveSlideChip}
          >
            {
              (state) => (
                <img src={CHIP_LIST[activeSlideChipIndex]} className={clsx(classes['chips-extra'], classes[state])} alt="" />
              )
            }
          </Transition>
        </div>
      </div>
      <Collections />
    </Container>
  );

  function setNextActiveSlideChip() {
    setActiveSlideChipIndex((activeSlideChipIndex + 1) % CHIP_LIST.length);
    setSlideChipChanging(false);
  }
};

export default About;
