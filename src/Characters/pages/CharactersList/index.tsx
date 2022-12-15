import React, { useEffect, useState } from 'react';
import { Character } from '../../../models';
import AddCharacterForm from './AddCharacterForm';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addCharacters, deleteCharacter, fetchCharacters, setIsFetching } from '../../charactersReducer';
import Loader from '../../../components/Loader';
import { useTranslation } from 'react-i18next';

const CharactersList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

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
      <Routes>
        <Route path="/" element={<Link to="add">{t('characters.add')}</Link>} />
        <Route path="add" element={<AddCharacterForm onAddCharacter={onAddCharacter} />} />
      </Routes>

      <br/><br/>

      {fetchingCharacters && <Loader />}

      {!fetchingCharacters && characters.map((c) =>
        <div key={c.id}>
          <img
            onClick={() => onSelectCharacter(c)}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
            alt={c.name}
            src={c.image}
          />
          {t('characters.id')}: {c.id} -
          {t('characters.name')}: {c.name} -
          <button onClick={() => dispatch(deleteCharacter(c.id))}>{t('characters.delete')}</button>
        </div>
      )}
    </>
  );
};

export default CharactersList;