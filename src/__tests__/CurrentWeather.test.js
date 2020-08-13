import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CurrentWeather } from '../components/CurrentWeather/CurrentWeather';

describe('CurrentWeather component', () => {
  it('should render UI as expected', () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
