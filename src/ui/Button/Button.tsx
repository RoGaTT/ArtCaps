/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<PropsType> = ({
  className,
  children,
  ...rest
}) => (
  <button className={clsx(classes.root, className)} {...rest} type={rest.type || 'button'}>
    {children}
  </button>
);

export default Button;
