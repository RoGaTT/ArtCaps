/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './Roadmap.module.scss';
import Container from '@/utils/components/Container';

import Title from '@/ui/Title';
import { TitleTypeEnum } from '@/ui/Title/Title';
import ROADMAP_CONFIG from '@/const/roadmap';
import AdventurerImg from '@/assets/img/Adventurer.png';

interface PropsType {
  className?: string;
}

const Roadmap: FC<PropsType> = ({
  className,
}) => (
  <Container
    className={clsx(classes.root, className)}
    wrapperClassName={classes.wrapper}
    id="roadmap"
  >
    <img className={classes.adventurer} src={AdventurerImg} alt="" />
    <Title type={TitleTypeEnum.BLUE}>Launch Roadmap</Title>
    <div className={classes.content}>
      {
        ROADMAP_CONFIG.map((item) => (
          <div
            key={item.number}
            className={classes.row}
          >
            <div className={classes['row-title']}>
              <span>
                {item.number}
                %
              </span>
            </div>
            <div className={classes['row-content']}>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  </Container>
);

export default Roadmap;
