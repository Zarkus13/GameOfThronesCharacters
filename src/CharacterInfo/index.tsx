import React from 'react';
import { Character } from '../models';

interface Props {
  character: Character
}

const CharacterInfo: React.FC<Props> = ({ character }: Props) =>
  <div>
    <img
      style={{ maxWidth: '100px', maxHeight: '100px' }}
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
  </div>;

export default CharacterInfo;