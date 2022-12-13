import React from 'react';
import { useParams } from 'react-router-dom';
import { charactersList } from '../CharactersList';

const CharacterInfo: React.FC = () => {
  const { id } = useParams();

  if (Number.isNaN(Number(id)))
    return <div>Wrong ID !</div>

  const character = charactersList.at(Number(id));

  if (!character)
    return <div>Unknown character !</div>;

  return (
    <div>
      <img
        style={{maxWidth: '100px', maxHeight: '100px'}}
        alt={character.name}
        src={character.image}
      /> <br/>

      ID: {character.id} <br/>
      Name: {character.name} <br/>

      {character.title &&
        <>Title: {character.title}<br/></>
      }

      {character.family &&
        <>Family: {character.family}<br/></>
      }
    </div>
  );
}

export default CharacterInfo;