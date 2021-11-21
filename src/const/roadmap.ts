type RoadMapItem = {
  number: number;
  title: string;
  text: string;
}

const ROADMAP_CONFIG: RoadMapItem[] = [
  {
    number: 0,
    title: 'Welcome to the Club!',
    text: 'Take a seat, join other fellow artcapser/fighters on Discord, and sip a glass of champagne. We will be raffling 5 exclusive caps once we reach 20,000 (?) members on Discord.',
  },
  {
    number: 25,
    title: 'ENTRÉE DE CAVIAR ',
    text: 'The owner of inclusive caps will be rewarded for thanking them for being part of the community. 10% of the royalties will be dedicated to a special fund — (?)',
  },
  {
    number: 50,
    title: 'Drippy',
    text: 'You will receive exclusive access to print your image on the merch.',
  },
  {
    number: 75,
    title: 'To the Moon! ',
    text: 'A total of 10 special Caps, including one Heroic Cap, will be raffled among all the Caps holders.',
  },
  {
    number: 100,
    title: 'BREEDING',
    text: 'Our team will begin to implement the functions of developing warriors and raising their classes after the launch of the project. This will allow owners to receive tokens and send them into battle to create new, stronger heroes. To develop your skills you must have 2 caps. During the battle, you unlock their magical power, which creates a new special chip with their own powers. Her class may be higher and her abilities more unique. This makes it possible to become the owner of a rare cap.',
  },
];

export default ROADMAP_CONFIG;
