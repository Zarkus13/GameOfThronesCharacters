import React from 'react';
import { Character } from '../models';

const characters: Character[] = [
  {
    id: 0,
    name: 'Jon Snow',
    image: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/06/got-kit-big__w770.jpg'
  },
  {
    id: 1,
    name: 'Arya Stark',
    image: 'https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/04/01/Game-of-Thrones-mais-au-fait-qui-se-trouve-sur-la-liste-macabre-d-Arya-Stark.jpg?VersionId=jayhYGAAvysgwqrLReBj5gX9xymRkSeb'
  },
  {
    id: 3,
    name: 'Bronn of the Blackwater',
    image: 'https://pbs.twimg.com/profile_images/621713203341295616/XD1GDRHX_400x400.jpg'
  }
];

const CharactersList: React.FC = () =>
  <>
    {characters.map((c) =>
      <div>
        <img style={{ maxWidth: '100px', maxHeight: '100px' }} alt={c.name} src={c.image} />
        ID: {c.id} - Name: {c.name}
      </div>
    )}
  </>;

export default CharactersList;