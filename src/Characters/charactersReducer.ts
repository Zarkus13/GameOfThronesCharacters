import { Character, ThroneAPICharacter, throneAPICharacterToCharacter } from '../models';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCharactersAPI } from './api';

interface State {
  characters: Character[],
  fetchingCharacters: boolean
}

const initialState: State = {
  characters: [],
  fetchingCharacters: false
};

export const addCharactersToState = (state: State, action: PayloadAction<Character[]>): State => ({
  ...state,
  characters: state.characters.concat(action.payload),
  fetchingCharacters: false
});

export const deleteCharacterFromState = (state: State, action: PayloadAction<number>): State => {
  const id = state.characters.findIndex((c) => c.id === action.payload);

  if (id === -1)
    return state;

  return ({
    ...state,
    characters:
      state.characters.slice(0, id)
        .concat(
          state.characters.slice(id + 1, state.characters.length)
        )
  });
};

export const setIsFetchingToState = (state: State) => ({
  ...state,
  fetchingCharacters: true
});

export const fetchCharacters = createAsyncThunk(
  'tasks/fetchCharacters',
  fetchCharactersAPI
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacters: addCharactersToState,
    deleteCharacter: deleteCharacterFromState,
    setIsFetching: setIsFetchingToState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, setIsFetchingToState);

    builder.addCase(fetchCharacters.fulfilled, addCharactersToState);
  }
});

export const { addCharacters, deleteCharacter, setIsFetching } = charactersSlice.actions;

export default charactersSlice.reducer;