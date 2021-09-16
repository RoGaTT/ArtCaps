import React, {
  FC,
} from 'react';

import Container from '@/utils/components/Container';
import classes from './Header.module.scss';

const Header: FC = () => {
  console.log('object');

  return (
    <div className={classes.wrapper}>
      <Container
        className={classes.root}
      >
        dasdas
      </Container>
    </div>
  );
};

export default Header;
