/* eslint-disable react/require-default-props */
import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Roadmap.module.scss';
import Container from '@/utils/components/Container';

import RoadmapTextImg from '@/assets/img/texts/roadmap.svg';

interface PropsType {
  className?: string;
}

const Roadmap: FC<PropsType> = ({
  className,
}) => {
  const timerIntervalRef = useRef<null | NodeJS.Timer>(null);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <img src={RoadmapTextImg} alt="" />
      <div className={classes.content}>
        <div className={classes.column}>
          <div className={classes.status}>
            <h6>Current status:</h6>
            <div className={classes['status-number']}>
              <span>0%</span>
              <span>0%</span>
            </div>
            <p>We will create the first hundred tokens for raffles, gifts and personal collection of our team</p>
          </div>
          <div className={classes.done}>
            <h6 className={classes.green}>Done:</h6>
            <div className={clsx(classes.checkpoint, classes.green)}>
              <span>20%</span>
              <p>
                We are implementing an exclusive merchant shop
                <br />
                for NFT token holders.
                <br />
                T-shirts, caps, chips and many unique items await you.
              </p>
            </div>
            <div className={clsx(classes.checkpoint, classes.green)}>
              <span>20%</span>
              <p>
                We are implementing an exclusive merchant shop
                <br />
                for NFT token holders.
                <br />
                T-shirts, caps, chips and many unique items await you.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.title}>
            <h6>Next:</h6>
          </div>
          <div className={classes.next}>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>20%</span>
              </div>
              <p>
                We are implementing an exclusive merchant shop
                <br />
                for NFT token holders.
                <br />
                T-shirts, caps, chips and many unique items await you.
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>40%</span>
              </div>
              <p>
                We will donate 10% of the
                <br />
                amount of the sold tokens
                <br />
                to charity
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>60%</span>
              </div>
              <p>
                We will create a comic strip and exclusive
                <br />
                materials based on projects from leading
                <br />
                ArtCaps artists, which will go to the first
                <br />
                participants
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>80%</span>
              </div>
              <p>
                We will donate 10% of the
                <br />
                amount of the sold tokens
                <br />
                to charity
              </p>
            </div>
            <div className={clsx(classes.checkpoint)}>
              <div>
                <span>100%</span>
              </div>
              <p>
                We implement unique tokens:
                <br />
                3D pagers, EroticCaps and
                <br />
                others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Roadmap;
