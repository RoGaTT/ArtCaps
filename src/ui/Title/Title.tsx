/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable-next-line react/require-default-props */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './Title.module.scss';

export enum TitleTypeEnum {
  BLUE = 'blue',
  PINK = 'pink'
}

interface PropsType {
  className?: string;
  type?: TitleTypeEnum
}

const Title: FC<PropsType> = ({
  className,
  children,
  type = TitleTypeEnum.PINK,
}) => (
  <div className={clsx(classes.root, className)}>
    <span className={clsx(classes.first, classes[type])}>{children}</span>
    <span className={clsx(classes.second, classes[type])}>{children}</span>
    <span className={clsx(classes.third, classes[type])}>{children}</span>
  </div>
);

export default Title;
