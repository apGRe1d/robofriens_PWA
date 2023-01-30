import App2 from '../App2';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('TESTING APP WITH REDUX', function () {
  it('initial snapshot test', () => {
    const mockStore = {
      robots: [],
      searchField: ''
    }
    // expect(shallow(<App2 store={mockStore}/>)).toMatchSnapshot();
  });
});
