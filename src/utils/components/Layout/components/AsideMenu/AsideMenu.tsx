import clsx from 'clsx';
import React, { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { goBlank, goWithScroll } from '@/utils/functions/dom';
import Button from '@/ui/MintButton';
import classes from './AsideMenu.module.scss';

type IProps = {
  onClose: { (): void }
}

const AsideMenu: FC<IProps> = ({
  onClose,
}) => {
  useEffect(() => {
    const buffer = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = buffer;
    };
  }, []);

  const history = useHistory();

  const handleGoWithScroll = useCallback((id: string) => () => {
    goWithScroll('/', id, history)();
    onClose();
  }, [history, onClose]);

  const handleGoBlank = useCallback((path: string) => () => {
    goBlank(path)();
    onClose();
  }, [onClose]);

  return (
    <div className={clsx(classes['root-wrapper'], 'animate__animated', 'animate__fadeInRight', 'animate__faster')}>
      <nav className={classes.root}>
        <Button onClick={handleGoWithScroll('courses')}>Курсы</Button>
        <Button onClick={handleGoWithScroll('quests')}>Квесты</Button>
        <Button onClick={handleGoWithScroll('materials')}>Полезные материалы</Button>
        <Button onClick={handleGoBlank('https://oculus-med.ru')}>На главную</Button>
      </nav>
    </div>
  );
};

export default AsideMenu;
