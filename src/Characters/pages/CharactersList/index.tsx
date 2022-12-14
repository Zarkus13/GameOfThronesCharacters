import React, { useEffect, useState } from 'react';
import { Character } from '../../../models';
import AddCharacterForm from './AddCharacterForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addCharacters, deleteCharacter, fetchCharacters, setIsFetching } from '../../charactersReducer';

const CharactersList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { characters, fetchingCharacters } = useAppSelector((state) => state.characters);

  useEffect(() => {
    if (!fetchingCharacters && characters.length === 0)
      dispatch(fetchCharacters());
  }, []);

  const onAddCharacter = (name: string, imageUrl: string, title?: string, family?: string) => {
    const c: Character = {
      id: characters.length,
      name,
      image: imageUrl,
      title,
      family
    };

    dispatch(addCharacters([c]));
  };

  const onSelectCharacter = (c: Character) => {
    navigate('/character/' + c.id);
  };

  return (
    <>
      <AddCharacterForm onAddCharacter={onAddCharacter} />

      <br/><br/>

      {fetchingCharacters && <em>Loading ...</em>}

      {!fetchingCharacters && characters.map((c) =>
        <div key={c.id}>
          <img onClick={() => onSelectCharacter(c)} style={{ maxWidth: '100px', maxHeight: '100px' }} alt={c.name} src={c.image} />
          ID: {c.id} - Name: {c.name} - <button onClick={() => dispatch(deleteCharacter(c.id))}>Delete</button>
        </div>
      )}
    </>
  );
};

export default CharactersList;