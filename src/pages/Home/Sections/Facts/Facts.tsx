/* eslint-disable react/require-default-props */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './Facts.module.scss';
import Container from '@/utils/components/Container';

import FactsTextImg from '@/assets/img/texts/facts.svg';

interface PropsType {
  className?: string;
}

const Facts: FC<PropsType> = ({
  className,
}) => (
  <Container
    className={clsx(classes.root, className)}
    wrapperClassName={classes.wrapper}
  >
    <img src={FactsTextImg} alt="" />
    <div className={classes.content}>
      <div className={classes.row}>
        <div className={classes.item}>
          <p>Token price</p>
          <div>
            <span>0.06 ETH</span>
            <span>0.06 ETH</span>
          </div>
        </div>
        <div className={classes.separator} />
        <div className={classes.item}>
          <p>Total number of tokens</p>
          <div>
            <span>30,000 tokens</span>
            <span>30,000 tokens</span>
          </div>
        </div>
      </div>
      <div className={clsx(classes.row, classes.triple)}>
        <div className={classes.item}>
          <p>More than 540 attributes are fully handmade</p>
        </div>
        <div className={classes.separator} />
        <div className={clsx(classes.item, classes.big)}>
          <p>
            First ArtCaps token owners will
            <br />
            {' '}
            receive 3 special tokens
            <br />
            {' '}
            inspired by our artists
          </p>
        </div>
        <div className={classes.separator} />
        <div className={classes.item}>
          <p>
            Each token is
            <br />
            {' '}
            randomly
            {' '}
            <br />
            generated
          </p>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.item}>
          <p>Active community participation</p>
        </div>
        <div className={classes.separator} />
        <div className={clsx(classes.item, classes.noLineMobile)}>
          <p>
            Blockchain storage
            <br />
            {' '}
            accessible only by the owner
          </p>
        </div>
      </div>
      {/* <p className={classes.onlyMobile}>
        First ArtCaps token owners will receive 3 exclusive materials, inspired by our artists
      </p> */}
    </div>
  </Container>
);

export default Facts;
