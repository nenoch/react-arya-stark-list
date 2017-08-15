import React from 'react';
import { shallow } from 'enzyme';
import {App} from './App';
import { initialState } from './reducers/';

it('renders without crashing', () => {
  const mockSubmit = jest.fn();
  const mockDelete = jest.fn();

  const component = shallow(
    <App
    state={initialState}
    submitName={mockSubmit}
    deleteName={mockDelete}
    names={[]}
    />
  );

  expect(component.exists()).toEqual(true);
});
