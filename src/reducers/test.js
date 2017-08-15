import { reducer, initialState } from '.';
import types from '../constants/';

describe('Reducer', () => {
  const nameText = 'Cersei Lannister';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit name', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_NAME,
        id: 1,
        text: nameText,
      };

      const expectedState = {
        names: [
          {
            id: 1,
            text: nameText,
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
      };

      const action = {
        type: types.DELETE_NAME,
        id: 1,
      };

      const expectedState = {
        names: [],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

});
