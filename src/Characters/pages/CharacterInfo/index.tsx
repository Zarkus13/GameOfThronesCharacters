import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { fetchCharacters } from '../../charactersReducer';
import Loader from '../../../components/Loader';
import { useTranslation } from 'react-i18next';

const CharacterInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { characters, fetchingCharacters } = useAppSelector((state) => state.characters);
  const { id } = useParams();

  useEffect(() => {
    if (!fetchingCharacters && characters.length === 0)
      dispatch(fetchCharacters());
  }, [fetchingCharacters]);

  if (Number.isNaN(Number(id)))
    return <div>{t('characters.errors.wrong-id')} !</div>

  const character = characters.find((c) => c.id === Number(id));

  if (fetchingCharacters)
    return <div><Loader /></div>;

  if (!character)
    return <div>{t('characters.errors.unknown')} !</div>;

  return (
    <div>
      <img
        style={{maxWidth: '100px', maxHeight: '100px'}}
        alt={character.name}
        src={character.image}
      /> <br/>

      {t('characters.id')}: {character.id} <br/>
      {t('characters.name')}: {character.name} <br/>

      {character.title &&
        <>{t('characters.title')}: {character.title}<br/></>
      }

      {character.family &&
        <>{t('characters.family')}: {character.family}<br/></>
      }
    </div>
  );
}

export default CharacterInfo;