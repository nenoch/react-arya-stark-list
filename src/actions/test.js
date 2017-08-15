import actions from '.';
import types from '../constants/';

describe('Actions', ()=>{
  const name = "Cersei Lannister";

  it('Should create an action to add a name', ()=>{
    const expectedAction = {
      type: types.SUBMIT_NAME,
      id: 1,
      text: name,
    };

    expect(actions.submitName(name)).toEqual(expectedAction);
  });

  it('Should create an action to delete a name', ()=>{
    const expectedAction = {
      type: types.DELETE_NAME,
      id: 1,
    };

    expect(actions.deleteName(1)).toEqual(expectedAction);
  });

  it('Should create an action to undelete a name', ()=>{
    const expectedAction = {
      type: types.UNDELETE_NAME,
      id: 1,
    };

    expect(actions.undeleteName(1)).toEqual(expectedAction);
  });

});
