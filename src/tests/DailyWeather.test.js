import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DailyWeather from '../components/DailyWeather/DailyWeather';

describe('DailyWeather component', () => {
  it('should render UI as expected', () => {
    const wrapper = shallow(<DailyWeather />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
