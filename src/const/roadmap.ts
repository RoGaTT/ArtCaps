type RoadMapItem = {
  number: number;
  title: string;
  text: string;
}

const ROADMAP_CONFIG: RoadMapItem[] = [
  {
    number: 0,
    title: 'Welcome to the Club!',
    text: 'Take a seat, join other fellow АrtCapsers on Discord, and sip a glass of champagne. We will be raffling 5 ArtCaps once we reach 20,000 members on Discord.',
  },
  {
    number: 25,
    title: 'Fasten seat belts',
    text: 'The owner of  ArtCaps will be rewarded for thanking them for being part of the community. 10% of the royalties will be dedicated to a special fund to ensure the ArtCaps longevity through marketing campaigns.',
  },
  {
    number: 50,
    title: 'Warming up',
    text: 'Launch of the ArtCaps merch collection, with the option of having your ArtCaps NFT printed on the merch. Merch will be sent to ArtCapsers and our influencers.',
  },
  {
    number: 75,
    title: 'To the Moon!',
    text: 'A total of 10 Immortal ArtCaps, including one Legendary ArtCap, will be raffled among all the ArtCapsers.',
  },
  {
    number: 100,
    title: 'Breeding',
    text: 'Our team will begin to implement the functions of developing warriors and raising their classes after the launch of the project. This will allow owners to receive tokens and send them into battle to create new, stronger heroes. To develop your skills you must have 2 ArtCaps. During the battle, you unlock their magical power, which creates a new special Cap with unique powers. This makes it possible to become the owner of a rare Cap.',
  },
];

export default ROADMAP_CONFIG;
