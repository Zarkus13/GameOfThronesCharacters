import { addCharactersToState, deleteCharacterFromState, setIsFetchingToState } from './charactersReducer';
import { FakePayloadAction } from '../utils/tests';

const initialState = {
  characters: [],
  fetchingCharacters: false
};

const characters = [
  {
    id: 0,
    name: 'C0',
    title: 'T0',
    family: 'F0',
    image: 'I0'
  },
  {
    id: 1,
    name: 'C1',
    title: 'T1',
    image: 'I1'
  },
  {
    id: 2,
    name: 'C2',
    family: 'F2',
    image: 'I2'
  }
];

test('should add characters to state', () => {

  const res = addCharactersToState(
    initialState,
    FakePayloadAction('addCharacters', characters)
  );

  expect(res).toEqual({
    fetchingCharacters: false,
    characters: characters
  });
});

test('should add characters to existing list to state', () => {
  const state = {
    fetchingCharacters: true,
    characters: characters
  };

  const character = {
    id: 4,
    name: 'C4',
    title: 'T4',
    family: 'F4',
    image: 'I4'
  };

  const res = addCharactersToState(
    state,
    FakePayloadAction('addCharacters', [character])
  );

  expect(res).toEqual({
    fetchingCharacters: false,
    characters: characters.concat([character])
  });
});

test('should change fetching state', () => {
  const res = setIsFetchingToState(initialState);

  expect(res).toEqual({
    fetchingCharacters: true,
    characters: []
  });
});

test('should remove character from state', () => {
  const state = {
    fetchingCharacters: false,
    characters: characters
  };

  const res = deleteCharacterFromState(
    state,
    FakePayloadAction('deleteCharacter', 1)
  );

  expect(res).toEqual({
    fetchingCharacters: false,
    characters: [
      {
        id: 0,
        name: 'C0',
        title: 'T0',
        family: 'F0',
        image: 'I0'
      },
      {
        id: 2,
        name: 'C2',
        family: 'F2',
        image: 'I2'
      }
    ]
  });
});