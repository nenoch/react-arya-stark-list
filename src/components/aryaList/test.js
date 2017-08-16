import React from 'react';
import { shallow } from 'enzyme';
import AryaList from '.';

describe('AryaList component', () => {
  const deleteMock = jest.fn();
  const undeleteMock = jest.fn();

  const props = {
    names: [
      {
        id: 1,
        text: 'Cersei Lannister',
      },
    ],
    deleted: [
      {
        id: 2,
        text: 'Walder Frey',
      }
    ],
    deleteName: deleteMock,
    undeleteName: undeleteMock,
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

  it('Should display a name as deleted when deleted', () => {
    expect(component.find('.deleted-name-text').text()).toEqual(props.deleted[0].text);
  });

  it('Should call the undeleteName function when undelete button is clicked', () => {
    expect(undeleteMock.mock.calls.length).toEqual(0);
    component.find('.name-undelete').simulate('click');
    expect(undeleteMock.mock.calls.length).toEqual(1);
  });

});
