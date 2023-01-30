import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../ErrorBoundary';

it('when ErrorBoundary fires', function () {
  const wrapper = shallow(<ErrorBoundary />);
  wrapper.instance().componentDidCatch('something goes wrong...');
  expect(wrapper.instance().state.hasError).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});
