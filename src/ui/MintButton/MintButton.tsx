/* eslint-disable react/require-default-props */
import React, {
  FC, useMemo,
} from 'react';
import clsx from 'clsx';

import classes from './MintButton.module.scss';

import DefaultStateButtonImg from '@/assets/img/mint/default.svg';
import DefaultStateButtonExtraImg from '@/assets/img/mint/default_extra.svg';
import ReadySoonStateButtonImg from '@/assets/img/mint/ready_soon.svg';
import ReadySoonStateButtonExtraImg from '@/assets/img/mint/ready_soon_extra.svg';
import WithCoinsStateButtonImg from '@/assets/img/mint/with_coins.svg';
import WithCoinsStateButtonExtraImg from '@/assets/img/mint/with_coins_extra.svg';
import WithCoinsStateButtonExtraSetImg from '@/assets/img/mint/with_coins_extra_set.svg';
import WaitingStateButtonImg from '@/assets/img/mint/waiting.svg';
import WaitingStateButtonExtraImg from '@/assets/img/mint/waiting_extra.svg';
import FinalStateButtonImg from '@/assets/img/mint/final.svg';
import FinalStateButtonExtraImg from '@/assets/img/mint/final_extra.svg';

export enum MintButtonStateEnum {
  DEFAULT = 'default',
  READY_SOON = 'ready_soon',
  WITH_COINS = 'with_coins',
  WAITING = 'waiting',
  FINAL = 'final',
}

interface PropsType {
  type?: MintButtonStateEnum,
  className?: string
}

type ButtonConfig = {
  class: string,
  img: string,
  extraImg: string
}

const ButtonConfigDict: Record<string, ButtonConfig> = {
  default: {
    class: 'default',
    img: DefaultStateButtonImg,
    extraImg: DefaultStateButtonExtraImg,
  },
  ready_soon: {
    class: 'ready_soon',
    img: ReadySoonStateButtonImg,
    extraImg: ReadySoonStateButtonExtraImg,
  },
  with_coins: {
    class: 'with_coins',
    img: WithCoinsStateButtonImg,
    extraImg: WithCoinsStateButtonExtraImg,
  },
  waiting: {
    class: 'waiting',
    img: WaitingStateButtonImg,
    extraImg: WaitingStateButtonExtraImg,
  },
  final: {
    class: 'final',
    img: FinalStateButtonImg,
    extraImg: FinalStateButtonExtraImg,
  },
};

const MintButton: FC<PropsType> = ({
  type = MintButtonStateEnum.DEFAULT,
  className,
}) => {
  const memoConfig = useMemo(() => ButtonConfigDict[type], [type]);

  return (
    <button
      type="button"
      className={clsx(classes.root, className)}
    >
      <img className={classes.img} src={memoConfig.img} alt="" />
      {
        type !== MintButtonStateEnum.WITH_COINS && (
          <img className={clsx(classes.extraImg, classes[memoConfig.class], 'animated__animate')} src={memoConfig.extraImg} alt="" />
        )
      }
      {
        type === MintButtonStateEnum.WITH_COINS && (
          <img className={clsx(classes.extraImg, classes[memoConfig.class], 'animated__animate')} src={WithCoinsStateButtonExtraSetImg} alt="" />
        )
      }
    </button>
  );
};

export default MintButton;
