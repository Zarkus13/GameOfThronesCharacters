import axios from 'axios';
import { ThroneAPICharacter, throneAPICharacterToCharacter } from '../models';

export const fetchCharactersAPI = () =>
  axios.get<ThroneAPICharacter[]>('https://thronesapi.com/api/v2/Characters')
    .then((res) =>
      res.data.map(throneAPICharacterToCharacter)
    );