import types from '../constants/';

let nameId = 0;

const nextId = () => {
  nameId += 1;
  return nameId;
};

const actions = {
  submitName(text) {
    return {
      type: types.SUBMIT_NAME,
      id: nextId(),
      text,
    };
  },
  deleteName(id) {
    return {
      type: types.DELETE_NAME,
      id,
    };
  },
};

export default actions;
