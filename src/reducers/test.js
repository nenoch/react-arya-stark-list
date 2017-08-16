import { reducer, initialState } from '.';
import types from '../constants/';

describe('Reducer', () => {
  const nameText = 'John Doe';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit name', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_NAME,
        id: 26,
        text: nameText,
      };

      const expectedState = {
        names: [
          {
            id: 1,
            text: 'Cersei Lannister',
          },
          {
            id: 4,
            text: 'Melisandre',
          },
          {
            id: 5,
            text: 'Ilyn Payne',
          },
          {
            id: 6,
            text: 'Gregor "The Mountain" Clegane',
          },
          {
            id: 12,
            text: 'Sandor "The Hound" Clegane',
          },
          {
            id: 7,
            text: 'Beric Dondarrion',
          },
          {
            id: 8,
            text: 'Thoros of Myr',
          },
          {
            id: 26,
            text: nameText,
          },
        ],
        deleted: [
          {
            id: 13,
            text: 'Tywin Lannister',
          },
          {
            id: 10,
            text: 'Joffrey Baratheon',
          },
          {
            id: 2,
            text: 'Walder Frey',
          },
          {
            id: 3,
            text: 'Meryn Trant',
          },
          {
            id: 9,
            text: 'Polliver',
          },
          {
            id: 11,
            text: 'Rorge',
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Delete name', () => {
    it('Should return the correct state', () => {
      const startingState = {
        names: [
          {
            id: 1,
            text: nameText,
          },
        ],
        deleted: [],
      };

      const action = {
        type: types.DELETE_NAME,
        id: 1,
      };

      const expectedState = {
        names: [],
        deleted:[
          {
            id: 1,
            text: nameText,
          },
        ]
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Undelete name', () => {
    it('Should return the correct state', () => {
      const startingState = {
          names: [],
          deleted:[
            {
              id: 1,
              text: nameText,
            },
          ]
      };

      const action = {
        type: types.UNDELETE_NAME,
        id: 1,
      };

      const expectedState = {
        names: [
          {
            id: 1,
            text: nameText,
          },
        ],
        deleted:[],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

});
