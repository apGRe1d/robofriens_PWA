import { shallow, mount } from 'enzyme';
import CounterButton from '../CounterButton';
import React from 'react';

it('should increment after onclick CounterButton ', function () {
  const wrapper = shallow(<CounterButton />);
  expect(wrapper.state()).toEqual({count: 0});
  // 1ый вариант
  // wrapper.find('button').simulate('click');
  //2й вариант
  wrapper.find('button').props().onClick();
  expect(wrapper.state()).toEqual({count: 1})
});
