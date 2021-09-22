/* eslint-disable react/no-array-index-key */
import React, {
  FC, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Collection.module.scss';

import TwitterIcon from '@/assets/img/icons/twitter_extra.svg';

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

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  img: string;
  nickname: string;
  // eslint-disable-next-line react/require-default-props
  twitterBio?: string;
  role: string;
}

const CollectionCard: FC<PropsType> = ({
  className,
  img,
  nickname,
  twitterBio,
  role,
}) => {
  const [isChanging, setChangingState] = useState(false);
  const [collectionIndex, setCollectionIndex] = useState(0);

  return (
    <div className={clsx(classes.root, className)}>
      <img className={classes.front} src={CARD_LIST[0][collectionIndex[0]]} alt="" />
      <img className={classes.back} src={CollectionChipBackImg} alt="" />
    </div>
  );
};

export default CollectionCard;
