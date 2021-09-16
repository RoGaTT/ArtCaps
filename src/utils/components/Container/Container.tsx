/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './Container.module.scss';

type PropsType = {
    children: React.ReactNode,
    wrapperClassName?: string,
    className?: string,
    id?: string
}

const Container: FC<PropsType> = ({
  children, wrapperClassName, className, id,
}) => (
  <div {...(id ? { id } : {})} className={clsx(classes.root, wrapperClassName)}>
    <div className={clsx(classes.content, className)}>
      {children}
    </div>
  </div>
);

export default Container;
