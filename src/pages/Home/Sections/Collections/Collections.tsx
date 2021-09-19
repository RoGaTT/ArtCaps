/* eslint-disable react/require-default-props */
import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Collections.module.scss';
import Container from '@/utils/components/Container';

import CollectionsTextImg from '@/assets/img/texts/collections.svg';
import CollectionsChip1Img from '@/assets/img/chips/collection_1.png';
import CollectionsChip2Img from '@/assets/img/chips/collection_2.png';

interface PropsType {
  className?: string;
}

const Collections: FC<PropsType> = ({
  className,
}) => {
  const timerIntervalRef = useRef<null | NodeJS.Timer>(null);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <div className={classes.title}>
        <img src={CollectionsTextImg} alt="" />
        <p>
          Art caps HAVE 3 different collections of tokens, from three original artists.
          Each collection consists of 10,000 AI-generated collectibles poping on the Ethereum Blockchain.
        </p>
      </div>
      <div className={classes.cards}>
        <div className={classes['cards-item']}>
          <img src={CollectionsChip1Img} alt="" />
          <div className={classes['cards-item__text']}>
            <h6>Queen of glitch</h6>
            <p>Nadin Ego</p>
          </div>
        </div>
        <div className={classes['cards-item']}>
          <img src={CollectionsChip2Img} alt="" />
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
          <img src={CollectionsChip2Img} alt="" />
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
      </div>
    </Container>
  );
};

export default Collections;
