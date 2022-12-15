import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { fetchCharactersAPI } from './api';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetchCharactersAPI should return the list of the characters', async () => {
  server.use(
    rest.get('https://thronesapi.com/api/v2/Characters', (req, res, ctx) => {
      return res(ctx.json([
        {
          "id": 0,
          "firstName": "Daenerys",
          "lastName": "Targaryen",
          "fullName": "Daenerys Targaryen",
          "title": "Mother of Dragons",
          "family": "House Targaryen",
          "image": "daenerys.jpg",
          "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
        },
        {
          "id": 1,
          "firstName": "Samwell",
          "lastName": "Tarly",
          "fullName": "Samwell Tarly",
          "title": "Maester",
          "family": "House Tarly",
          "image": "sam.jpg",
          "imageUrl": "https://thronesapi.com/assets/images/sam.jpg"
        },
        {
          "id": 2,
          "firstName": "Jon",
          "lastName": "Snow",
          "fullName": "Jon Snow",
          "title": "King of the North",
          "family": "House Stark",
          "image": "jon-snow.jpg",
          "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
        }
      ]));
    })
  );

  const res = await fetchCharactersAPI();

  expect(res).toEqual([
    {
      id: 0,
      name: 'Daenerys Targaryen',
      title: 'Mother of Dragons',
      family: 'House Targaryen',
      image: 'https://thronesapi.com/assets/images/daenerys.jpg'
    },
    {
      id: 1,
      name: 'Samwell Tarly',
      title: 'Maester',
      family: 'House Tarly',
      image: 'https://thronesapi.com/assets/images/sam.jpg'
    },
    {
      id: 2,
      name: 'Jon Snow',
      title: 'King of the North',
      family: 'House Stark',
      image: 'https://thronesapi.com/assets/images/jon-snow.jpg'
    }
  ]);
});