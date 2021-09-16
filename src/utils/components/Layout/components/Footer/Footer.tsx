/* eslint-disable max-len */
import React, { FC } from 'react';

import Container from '@/utils/components/Container';

import { useHistory } from 'react-router';
import classes from './Footer.module.scss';

type IProps = {
  noSubscribe?: boolean
}

const Footer: FC<IProps> = ({
  noSubscribe,
}) => {
  const history = useHistory();

  return (
    <Container className={classes.root}>
      dasdas
    </Container>
  );
};

export default Footer;
