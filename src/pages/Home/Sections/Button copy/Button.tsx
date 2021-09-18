import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Button: FC<PropsType> = ({
  children,
  className,
  type,
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
    className={clsx(classes.root, className)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
