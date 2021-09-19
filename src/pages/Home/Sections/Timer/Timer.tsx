/* eslint-disable react/require-default-props */
import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Timer.module.scss';
import Container from '@/utils/components/Container';
import LogoImg from '@/assets/img/logo.svg';
import TimerDaysTextImg from '@/assets/img/texts/days.svg';
import TimerHoursTextImg from '@/assets/img/texts/hours.svg';
import TimerMinTextImg from '@/assets/img/texts/min.svg';
import TimerSecTextImg from '@/assets/img/texts/sec.svg';
import TimerMsecTextImg from '@/assets/img/texts/msec.svg';
import TimerChipIcon from '@/assets/img/chips/timer.svg';

import FollowUsTextIcon from '@/assets/img/texts/follow_us.svg';
import FollowArrowsRightIcon from '@/assets/img/icons/follow_arrows_right.svg';
import TwitterIcon from '@/assets/img/icons/twitter.svg';
import DiscordIcon from '@/assets/img/icons/discord.svg';
import InstagramIcon from '@/assets/img/icons/instagram.svg';

import { RELEASE_DATE } from '@/const/time';
import { addZeroToNumber } from '@/utils/functions/number';
import MintButton from '@/ui/MintButton';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<PropsType> = ({
  className,
}) => {
  const timerIntervalRef = useRef<null | NodeJS.Timer>(null);

  const [time, setTime] = useState({
    days: 40,
    hours: 21,
    minutes: 48,
    miliseconds: 99,
    seconds: 49,
  });

  useEffect(() => {
    timerIntervalRef.current = setInterval(() => {
      const diff = new Date(+RELEASE_DATE - (+(new Date())));
      const diffMiliseconds = +diff;
      if (diffMiliseconds < 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          miliseconds: 0,
        });
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      } else {
        setTime({
          days: Math.floor(diffMiliseconds / (1000 * 60 * 60 * 24)),
          hours: diff.getHours(),
          minutes: diff.getMinutes(),
          seconds: diff.getSeconds(),
          miliseconds: diff.getMilliseconds(),
        });
      }
    }, 67);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  return (
    <Container
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <img src={LogoImg} alt="" />
        <h4>Time to start</h4>
      </div>
      <div className={classes['timer-wrapper']}>
        <div className={clsx(classes.timer, classes['timer-major'])}>
          <div>
            <span>{addZeroToNumber(time.days)}</span>
            <img src={TimerDaysTextImg} alt="" />
          </div>
          <span>:</span>
          <div>
            <span>{addZeroToNumber(time.hours)}</span>
            <img src={TimerHoursTextImg} alt="" />
          </div>
          <span>:</span>
          <div>
            <span>{addZeroToNumber(time.minutes)}</span>
            <img src={TimerMinTextImg} alt="" />
          </div>
        </div>
        <div className={clsx(classes.timer, classes['timer-minor'])}>
          <div>
            <span>{time.miliseconds}</span>
            <img src={TimerMsecTextImg} alt="" />
          </div>
          <div>
            <span>{addZeroToNumber(time.seconds)}</span>
            <img src={TimerSecTextImg} alt="" />
          </div>
        </div>
      </div>
      <div className={classes['mint-wrapper']}>
        <img src={TimerChipIcon} alt="" />
        <MintButton />
      </div>
      <div className={classes.links}>
        <div className={classes['links-follow']}>
          <img src={FollowUsTextIcon} alt="" />
          <img src={FollowArrowsRightIcon} alt="" />
        </div>
        <div className={classes['links-icons']}>
          <img src={TwitterIcon} alt="" />
          <img src={DiscordIcon} alt="" />
          <img src={InstagramIcon} alt="" />
        </div>
        <div className={classes['links-follow']}>
          <img src={FollowArrowsRightIcon} alt="" className={classes.inverted} />
          <img src={FollowUsTextIcon} alt="" />
        </div>
      </div>
      <h6 className={classes.location}>Artcaps on opensea</h6>
    </Container>
  );
};

export default Button;
