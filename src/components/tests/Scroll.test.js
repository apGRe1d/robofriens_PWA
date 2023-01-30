import Scroll from '../Scroll';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from '../ErrorBoundary';

it('Scroll test ', function () {
  const wrapper = shallow(<Scroll></Scroll>);
  expect(wrapper).toMatchSnapshot();

  Object.defineProperty(screen, 'height', {
    writable: true,
    configurable: true,
    value: 1100
  });
  expect(screen.height).toEqual(1100);

  const wrapper2 = shallow(<Scroll></Scroll>);
  expect(wrapper2).toMatchSnapshot();

});
