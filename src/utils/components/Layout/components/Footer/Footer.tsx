/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { FC } from 'react';

import { useHistory } from 'react-router';
import Container from '@/utils/components/Container';

import classes from './Footer.module.scss';
import { goBlank, goWithScroll } from '@/utils/functions/dom';
import Button from '@/ui/Button';

type IProps = {
}

const Footer: FC<IProps> = () => {
  const history = useHistory();

  return (
    <Container className={classes.root} wrapperClassName={classes.wrapper}>
      <div className={classes.line} />
      <div className={classes.nav}>
        <span onClick={goWithScroll('/', 'about', history)}>About</span>
        <span onClick={goWithScroll('/', 'roadmap', history)}>Roadmap</span>
        <span onClick={goWithScroll('/', 'faq', history)}>FAQ</span>
        <span onClick={goWithScroll('/', 'team', history)}>Team</span>
      </div>
      <Button onClick={goBlank('https://discord.gg/xuTPCQRtfq')} className={classes.joinDiscord}>
        Join discord
      </Button>
    </Container>
  );
};

export default Footer;
