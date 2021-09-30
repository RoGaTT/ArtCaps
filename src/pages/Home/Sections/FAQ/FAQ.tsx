/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './FAQ.module.scss';
import Container from '@/utils/components/Container';
import FAQTextImage from '@/assets/img/texts/faq.svg';
import FAQChipImage from '@/assets/img/chips/faq.svg';

import TwitterIcon from '@/assets/img/icons/twitter.svg';
import DiscordIcon from '@/assets/img/icons/discord.svg';
import InstagramIcon from '@/assets/img/icons/instagram.svg';
import { goBlank } from '@/utils/functions/dom';

interface PropsType {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const FAQ: FC<PropsType> = ({
  className,
}) => (
  <Container
    className={clsx(classes.root, className)}
    wrapperClassName={classes.wrapper}
  >
    <div className={clsx(classes.image, classes.noMobile)}>
      <img src={FAQChipImage} alt="" />
    </div>
    <div className={classes.content}>
      <img src={FAQTextImage} alt="" />
      <div>
        <span>What are ArtCaps?</span>
        <p>It is a brand-new crypto project that is aimed to develop NFT-world and promote original artists and their art</p>
      </div>
      <div>
        <span>How much does one token cost?</span>
        <p>The Price is 0.06 EHT plus gas-commission.</p>
      </div>
      <div>
        <span>What does “four-for-one” mean?</span>
        <p>First 60% of customers will receive three exclusive NFT-materials created by every our artcaps painters.</p>
      </div>
      <div>
        <span>When will the sales begin?</span>
        <p>
          NFT tokens will be visible on sale in the nearest time. Watch the timer! The exact date will be announced on our social media.
          <br />
          Follow the news on our Twitter and Discord server.
        </p>
      </div>
      <div className={classes.socials}>
        <img onClick={goBlank('https://twitter.com/ar1caps')} src={TwitterIcon} alt="" />
        <img onClick={goBlank('https://discord.gg/xuTPCQRtfq')} src={DiscordIcon} alt="" />
        <img onClick={goBlank('https://instagram.com/ar1caps')} src={InstagramIcon} alt="" />
      </div>
    </div>
  </Container>
);

export default FAQ;
