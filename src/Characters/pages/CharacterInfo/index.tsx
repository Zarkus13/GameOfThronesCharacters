import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { fetchCharacters } from '../../charactersReducer';

const CharacterInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characters, fetchingCharacters } = useAppSelector((state) => state.characters);
  const { id } = useParams();

  useEffect(() => {
    if (!fetchingCharacters && characters.length === 0)
      dispatch(fetchCharacters());
  }, [fetchingCharacters]);

  if (Number.isNaN(Number(id)))
    return <div>Wrong ID !</div>

  const character = characters.find((c) => c.id === Number(id));

  if (fetchingCharacters)
    return <div><em>Loading ...</em></div>;

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