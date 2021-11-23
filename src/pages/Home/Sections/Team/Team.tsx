/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC,
} from 'react';
import clsx from 'clsx';

import classes from './Team.module.scss';
import Container from '@/utils/components/Container';
import TeamCard from '@/components/TeamCard';

import TeamCardChipImage1 from '@/assets/img/chips/team/1.png';
import TeamCardChipImage2 from '@/assets/img/chips/team/2.png';
import TeamCardChipImage3 from '@/assets/img/chips/team/3.png';
import TeamCardChipImage4 from '@/assets/img/chips/team/4.png';
import Title from '@/ui/Title';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Team: FC<PropsType> = ({
  className,
}) => (
  <Container
    className={clsx(classes.root, className)}
    wrapperClassName={classes.wrapper}
    id="team"
  >
    <Title className={classes.title}>Team</Title>
    <div className={clsx(classes.content)}>
      <TeamCard
        img={TeamCardChipImage1}
        nickname="GameMaster"
        role={() => (<>Boss</>)}
      />
      <TeamCard
        img={TeamCardChipImage2}
        nickname="Queen Of Glitch"
        role={() => (<>Queen of Glitch</>)}
      />
      <TeamCard
        img={TeamCardChipImage3}
        nickname="Katana Master"
        role={() => (<>Katana Master</>)}
      />
      <TeamCard
        img={TeamCardChipImage4}
        nickname="Cult kid"
        role={() => (<>Cult kid</>)}
      />
    </div>
  </Container>
);

export default Team;
