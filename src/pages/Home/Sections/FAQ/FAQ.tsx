/* eslint-disable max-len */
import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './FAQ.module.scss';
import Container from '@/utils/components/Container';
import FAQTextImage from '@/assets/img/texts/faq.svg';
import FAQChipImage from '@/assets/img/chips/faq.svg';

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
    <div className={classes.image}>
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
        <p>First 60% of customers will receive three exclusive materials created by artcaps painters</p>
      </div>
      <div>
        <span>When will the sales begin?</span>
        <p>
          NFT tokens will be visible on sale in the nearest time. The exact date will be announced on our social media.
          <br />
          Follow the news on our Twitter and Discord server.
        </p>
      </div>
    </div>
  </Container>
);

export default FAQ;
