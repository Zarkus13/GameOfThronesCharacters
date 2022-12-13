import React, { useEffect, useState } from 'react';
import { Character } from '../../../models';
import CharacterInfo from '../CharacterInfo';
import AddCharacterForm from './AddCharacterForm';
import { useNavigate } from 'react-router-dom';

export const charactersList: Character[] = [
  {
    id: 0,
    name: 'Jon Snow',
    image: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/06/got-kit-big__w770.jpg',
    title: 'King in the North',
    family: 'Stark'
  },
  {
    id: 1,
    name: 'Arya Stark',
    image: 'https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/04/01/Game-of-Thrones-mais-au-fait-qui-se-trouve-sur-la-liste-macabre-d-Arya-Stark.jpg?VersionId=jayhYGAAvysgwqrLReBj5gX9xymRkSeb',
    family: 'Stark'
  },
  {
    id: 2,
    name: 'Bronn of the Blackwater',
    image: 'https://pbs.twimg.com/profile_images/621713203341295616/XD1GDRHX_400x400.jpg',
    title: 'Knight of the Blackwater'
  }
];

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const navigate = useNavigate();

  useEffect(() => {
    setCharacters(charactersList);
  }, []);

  const onAddCharacter = (name: string, imageUrl: string, title?: string, family?: string) => {
    const c: Character = {
      id: characters.length,
      name,
      image: imageUrl,
      title,
      family
    };

    setCharacters(characters.concat([c]));
  };

  const onSelectCharacter = (c: Character) => {
    setSelectedCharacter(c);

    navigate('/character/' + c.id);
  };

  return (
    <>
      <AddCharacterForm onAddCharacter={onAddCharacter} />

      <br/><br/>

      {characters.map((c) =>
        <div onClick={() => onSelectCharacter(c)}>
          <img style={{ maxWidth: '100px', maxHeight: '100px' }} alt={c.name} src={c.image} />
          ID: {c.id} - Name: {c.name}
        </div>
      )}
    </>
  );
};

export default CharactersList;