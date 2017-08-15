import React from 'react';
import { shallow } from 'enzyme';
import AryaList from '.';

describe('AryaList component', () => {
  const deleteMock = jest.fn();

  const props = {
    names: [
      {
        id: 1,
        text: 'Cersei Lannister',
      },
    ],
    deleteName: deleteMock,
};

  const component = shallow(<AryaList {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a name when passed in as a prop', () => {
    expect(component.find('.name-text').text()).toEqual(props.names[0].text);
  });

  it('Should call the deleteName function when delete button is clicked', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    component.find('.name-delete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });

});
