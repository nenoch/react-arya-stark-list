import React from 'react';
import { shallow } from 'enzyme';
import AryaList from '.';

describe('AryaList component', () => {
  const names = [
    {
      id: 1,
      text: 'Cersei Lannister',
    },
  ];

  const component = shallow(<AryaList names={names} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a name when passed in as a prop', () => {
    expect(component.find('.name-text').text()).toEqual(names[0].text);
  });
});
