/* eslint-disable react/no-array-index-key */
import React, {
  FC,
} from 'react';

import '@fontsource/press-start-2p';

import classes from './Layout.module.scss';

type PropsType = {
    children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  console.log('object');
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
