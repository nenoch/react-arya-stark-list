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

    expect(actions.submitName(name)).toEqual(expectedAction);  });
});
