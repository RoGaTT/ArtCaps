/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC,
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
}) => (
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
          <p>
            The first 100 tokens will be created for competitions, gifts, and our team’s collection
          </p>
        </div>
        <div className={classes.done}>
          <h6 className={classes.green}>Done:</h6>
          <div className={clsx(classes.checkpoint, classes.green)}>
            <span>20%</span>
            <p>
              NFT-token owners will get access to the exclusive merch shop with t-shirts, caps, tokens, and many more unique stuff.
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
              NFT-token owners will get access to the exclusive merch shop with t-shirts, caps, tokens, and many more unique stuff.
            </p>
          </div>
          <div className={clsx(classes.checkpoint)}>
            <div>
              <span>40%</span>
            </div>
            <p>
              10% from every sold token will be donated charity
            </p>
          </div>
          <div className={clsx(classes.checkpoint)}>
            <div>
              <span>60%</span>
            </div>
            <p>
              We are going to create a comic book and exclusive materials based on projects from leading painters from ArtCaps, which will go straight to the first participants
            </p>
          </div>
          <div className={clsx(classes.checkpoint)}>
            <div>
              <span>80%</span>
            </div>
            <p>
              10% from every sold token will be donated charity
            </p>
          </div>
          <div className={clsx(classes.checkpoint)}>
            <div>
              <span>100%</span>
            </div>
            <p>
              Unique tokens are going to be created too: 3D pagers, EroticCaps and many more. The future is closer than you think
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Roadmap;
