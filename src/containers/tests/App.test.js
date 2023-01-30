import { shallow, mount } from 'enzyme';
import App from '../App';
import React from 'react';
import sinon from 'sinon';

describe('App.js TESTING', () => {
  let wrapper;
  beforeEach(() => {
    // монтируется перед каждым тестом
    wrapper = mount(<App />);
  });

  it('snapshot test', () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('test fetching', function () {
    expect.assertions(3);
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        return data.json();
      })
      .then(result => {
        expect(result.length).toEqual(10);
        wrapper.setState({robots: result});
        expect(wrapper.state().robots).toEqual(result);
        expect(wrapper).toMatchSnapshot();
      });
  });

  it('componentDidMount call test with UNMOUNT', function () {
    // размонтируем нашу обертку, т.к. она создается перед каждым тестом в beforeEach
    wrapper.unmount();
    // размонтирование было для того, чтобы сначала повесить шпиона на метод
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    // а уже после того, как повесили шпиона, мы можем запустить функцию маунт и создать обёртку
    // для тестирования метода componentDidMount важно использовать метод mount, а не shallow
    // т.к. метод shallow не вызывает методы жизненного цикла
    wrapper = mount(<App />);
    // тогда ожидание будет работать правильно
    expect(spy).toHaveBeenCalledTimes(1);
  });

  // it('componentDidMount call test ', function () {
    // expect.assertions(1);

    // const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    // wrapper.instance().componentDidMount();
    // expect(spy).toHaveBeenCalledTimes(1);
    // то же самое
    // expect(wrapper.instance().componentDidMount).toHaveBeenCalledTimes(1);
  // });

  it('on search change test ', function () {
    wrapper.instance().onSearchChange({
      target: {
        value: 'asd'
      }
    })
    expect(wrapper.state().searchfield).toEqual('asd');
  });


});

