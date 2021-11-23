/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Timer.module.scss';
import Container from '@/utils/components/Container';
import LogoImg from '@/assets/img/logo.svg';

// import { RELEASE_DATE } from '@/const/time';
import { addZeroToNumber } from '@/utils/functions/number';
import MintButton from '@/ui/MintButton';
import { goBlank } from '@/utils/functions/dom';
import Button from '@/ui/Button';
import { RELEASE_DATE } from '@/const/time';

interface PropsType {
  className?: string;
}

const Timer: FC<PropsType> = ({
  className,
}) => {
  const timerIntervalRef = useRef<null | NodeJS.Timer>(null);

  const [time, setTime] = useState({
    days: 88,
    hours: 88,
    minutes: 88,
    seconds: 88,
    miliseconds: 88,
  });

  const memoSetTimeData = useCallback(setTimeData, []);

  useEffect(() => {
    timerIntervalRef.current = setInterval(memoSetTimeData, 1000);

    memoSetTimeData();

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [memoSetTimeData]);

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
            <p>Days</p>
          </div>
          <span>:</span>
          <div>
            <span>{addZeroToNumber(time.hours)}</span>
            <p>Hours</p>
          </div>
          <span>:</span>
          <div>
            <span>{addZeroToNumber(time.minutes)}</span>
            <p>Min</p>
          </div>
        </div>
        <div className={clsx(classes.timer, classes['timer-minor'])}>
          <div>
            <span>{addZeroToNumber(time.seconds)}</span>
            <p>Sec</p>
          </div>
        </div>
      </div>
      <div className={classes['mint-wrapper']}>
        <MintButton />
      </div>
      <Button onClick={goBlank('https://discord.gg/xuTPCQRtfq')} className={classes.joinDiscord}>
        Join discord
      </Button>
      <h6 className={classes.location}>Artcaps on opensea</h6>
    </Container>
  );

  function setTimeData() {
    const diff = new Date(+RELEASE_DATE - (+(new Date())));
    diff.setDate(diff.getDate() - 1);
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
        // days: Math.ceil(diffMiliseconds / (1000 * 60 * 60 * 24)),
        days: diff.getDate(),
        hours: diff.getHours(),
        minutes: diff.getMinutes(),
        seconds: diff.getSeconds(),
        miliseconds: diff.getMilliseconds(),
      });
    }
  }
};

export default Timer;
