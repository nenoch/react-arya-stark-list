import React from 'react';
import { shallow, mount } from 'enzyme';
import AddName from '.';

describe('AddName component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(()=>{
    component = shallow(<AddName submitName={submitMock} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have an input field', () => {
    expect(component.find('.name-input').length).toEqual(1);
  });

  it('Should have a submit button', () => {
    expect(component.find('.name-submit').length).toEqual(1);
  });

  it('Should call submitName() when the button is clicked', () => {
    component = mount(<AddName submitName={submitMock} />);
    expect(submitMock.mock.calls.length).toEqual(0);
    component.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  });

});
