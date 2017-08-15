import types from '../constants/';

export const initialState = {
  names: [],
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
      };

    default:
      return state;
  }
};

export default reducer;
