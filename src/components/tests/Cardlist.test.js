import { shallow, mount, render } from 'enzyme';
import CardList from '../CardList';
import React from 'react';

it('expect to render CardList component ', function () {
  const mockRobots = [
    {
      key: 1,
      id: 1,
      name: 'John John',
      email: 'JohnJohn@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
