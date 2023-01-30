import { shallow, mount, render } from 'enzyme';
import Card from '../Card';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallowToJson } from "enzyme-to-json";

it('expect to render Card component ', function () {
  // expect(shallow(<Card />).length).toEqual(1);
  // expect(shallowToJson(shallow(<Card />))).toMatchSnapshot();
  expect(shallow(<Card />)).toMatchSnapshot();
  // expect(toJson(shallow(<Card />))).toMatchSnapshot();
  // expect(shallow(<Card />).getElement()).toMatchSnapshot();
});
console.log(shallow(<Card />));
