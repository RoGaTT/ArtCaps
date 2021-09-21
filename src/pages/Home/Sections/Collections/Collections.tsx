/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Collections.module.scss';
import Container from '@/utils/components/Container';

import CollectionsTextImg from '@/assets/img/texts/collections.svg';

import CollectionsChipImg_1_1 from '@/assets/img/chips/1/1.png';
import CollectionsChipImg_1_2 from '@/assets/img/chips/1/2.png';
import CollectionsChipImg_1_3 from '@/assets/img/chips/1/3.png';
import CollectionsChipImg_1_4 from '@/assets/img/chips/1/4.png';
import CollectionsChipImg_1_5 from '@/assets/img/chips/1/5.png';
import CollectionsChipImg_2_1 from '@/assets/img/chips/2/1.png';
import CollectionsChipImg_2_2 from '@/assets/img/chips/2/2.png';
import CollectionsChipImg_2_3 from '@/assets/img/chips/2/3.png';
import CollectionsChipImg_2_4 from '@/assets/img/chips/2/4.png';
import CollectionsChipImg_2_5 from '@/assets/img/chips/2/5.png';
import CollectionsChipImg_3_1 from '@/assets/img/chips/3/1.png';
import CollectionsChipImg_3_2 from '@/assets/img/chips/3/2.png';
import CollectionsChipImg_3_3 from '@/assets/img/chips/3/3.png';
import CollectionsChipImg_3_4 from '@/assets/img/chips/3/4.png';
import CollectionsChipImg_3_5 from '@/assets/img/chips/3/5.png';
import CollectionChipBackImg from '@/assets/img/chips/back.png';

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
  ],
  [
    CollectionsChipImg_2_1,
    CollectionsChipImg_2_2,
    CollectionsChipImg_2_3,
    CollectionsChipImg_2_4,
    CollectionsChipImg_2_5,
  ],
  [
    CollectionsChipImg_3_1,
    CollectionsChipImg_3_2,
    CollectionsChipImg_3_3,
    CollectionsChipImg_3_4,
    CollectionsChipImg_3_5,
  ],
];

const Collections: FC<PropsType> = ({
  className,
}) => {
  const [activeItem, setActiveItem] = useState(0);
  const [itemIndexList, setItemIndexList] = useState([0, 0, 0]);

  const memoUpdateItemIndexList = useCallback(updateItemIndexList, [activeItem, itemIndexList]);

  useEffect(() => {
    const interval = setInterval(memoUpdateItemIndexList, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [memoUpdateItemIndexList]);

  return (
    <Container
      className={clsx(classes.root, className)}
      wrapperClassName={classes.wrapper}
    >
      <div className={classes.title}>
        <img src={CollectionsTextImg} alt="" />
        <p>
          ArtCaps is a 3 different token collections from three original painters. Each collection consists of 10000 AI-generated collectibles popping on the Ethereum Blockchain
        </p>
      </div>
      <div className={classes.cards}>
        <div className={classes['cards-item']}>
          <img src={activeItem !== 0 ? CollectionChipBackImg : CARD_LIST[0][itemIndexList[0]]} alt="" />
          <div className={classes['cards-item__text']}>
            <h6>Queen of glitch</h6>
            <p>Nadin Ego</p>
          </div>
        </div>
        <div className={classes['cards-item']}>
          <img src={activeItem !== 1 ? CollectionChipBackImg : CARD_LIST[1][itemIndexList[1]]} alt="" />
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
          <img src={activeItem !== 2 ? CollectionChipBackImg : CARD_LIST[2][itemIndexList[2]]} alt="" />
          <div className={classes['cards-item__text']}>
            <h6>
              Katana
              <br />
              master
            </h6>
            <p>Krasovski</p>
          </div>
        </div>
      </div>
    </Container>
  );

  function updateItemIndexList() {
    setActiveItem((activeItem + 1) % 3);
    const buffer = [...itemIndexList];
    buffer[activeItem] = (itemIndexList[activeItem] + 1) % 5;
    setItemIndexList(
      buffer,
    );
  }
};

export default Collections;
