/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './FAQ.module.scss';
import Container from '@/utils/components/Container';
import FAQChipImage1 from '@/assets/img/chips/faq_1.png';
import FAQChipImage2 from '@/assets/img/chips/faq_2.png';

import Title from '@/ui/Title';

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
    id="faq"
  >
    <Title className={classes.title}>FAQ</Title>
    <div className={classes.row}>
      <div className={classes['row-text']}>
        <div>
          <span>What is ArtCaps?</span>
          <p>ArtCaps offers 3 different token collections from three original artists. Each collection consists of 3,333 AI-generated collectibles minted on the Ethereum Blockchain</p>
        </div>
        <div>
          <span>When is the launch date? </span>
          <p>12.12.2021</p>
        </div>
        <div>
          <span>Are all the ArtCaps exclusive?</span>
          <p>Each image is randomly generated with combinations of signs of having variable rarity: outfit, headwear and much more. Some tokens are rarer than others. That being said, there are a few images that are even rarer! In this regard, the value of rare items increases.</p>
        </div>
      </div>
      <div className={clsx(classes['row-image'], classes.noMobile)}>
        <img src={FAQChipImage1} alt="" />
      </div>
    </div>
    <div className={classes.row}>
      <div className={clsx(classes['row-image'], classes.noMobile)}>
        <img src={FAQChipImage2} alt="" />
      </div>
      <div className={classes['row-text']}>
        <div>
          <span>Will there be a presale?</span>
          <p>NFT tokens will be visible on sale in the nearest time. The exact date will be announced on our social media.</p>
          <p>Follow the news on our Discord server.</p>
        </div>
        <div>
          <span>How much does one token cost? </span>
          <p>The price will be announced very soon.</p>
        </div>
        <div>
          <span>Do I own the ArtCaps after minting it?</span>
          <p>Yes, you will own all intellectual property to the ArtCap, which means you can use it to create and sell merch.</p>
        </div>
        <div>
          <span>What can I do with my ArtCaps?</span>
          <p>You can use your ArtCaps as a profile picture online, and you can also resell your tokens for profit. You can also participate in battles to raise the price of your caps and have fun playing.</p>
        </div>
      </div>
    </div>
  </Container>
);

export default FAQ;
