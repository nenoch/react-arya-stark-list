import types from '../constants/';

export const initialState = {
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_NAME:
      return {
        ...state,
        names: [
          ...state.names,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    case types.DELETE_NAME:
      return {
        ...state,
        names: [
          ...state.names.filter(name => (
            name.id !== action.id
          )),
        ],
        deleted: [
          ...state.deleted,
          ...state.names.filter(name => (
            name.id === action.id
          )),
        ],
      };
    case types.UNDELETE_NAME:
      return {
        ...state,
        names: [
          ...state.names,
          ...state.deleted.filter(name => (
            name.id === action.id
          )),
        ],
        deleted: [
          ...state.deleted.filter(name => (
            name.id !== action.id
          )),
        ],
      }

    default:
      return state;
  }
};

export default reducer;
