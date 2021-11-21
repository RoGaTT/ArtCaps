/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './DevelopmentRoadmap.module.scss';
import Container from '@/utils/components/Container';

import Title from '@/ui/Title';
import { TitleTypeEnum } from '@/ui/Title/Title';
import DEVELOPMENT_ROADMAP_CONFIG from '@/const/development_roadmap';

interface PropsType {
  className?: string;
}

const DevelopmentRoadmap: FC<PropsType> = ({
  className,
}) => (
  <Container
    className={clsx(classes.root, className)}
    wrapperClassName={classes.wrapper}
  >
    <Title type={TitleTypeEnum.PINK}>Development Roadmap</Title>
    <div className={classes.content}>
      {
        DEVELOPMENT_ROADMAP_CONFIG.map((item, itemIndex) => (
          <div
            key={`development_roadmap_item__${itemIndex}`}
            className={classes.row}
          >
            <div className={classes['row-title']}>
              <span>{item.title}</span>
            </div>
            <div className={classes['row-content']}>
              <p>{item.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  </Container>
);

export default DevelopmentRoadmap;
