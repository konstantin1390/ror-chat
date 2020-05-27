import { act } from 'react-dom/test-utils';
import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';
import Option from './Option';

describe('Option component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      answer: ['Yes'],
    };

    wrapper = mount(<Option {...props} />);

    act(() => {
      wrapper.update();
    });
  });

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should render with text as a payload', () => {
    expect(wrapper.find('span').text()).toBe('Yes');
  });

  test('Should have default Background', () => {
    expect(wrapper).toHaveStyleRule('background', '#FFFFFF');
  });

  test('Should have custom Background', () => {
    const props = {
      fieldBackground: 'red',
      answer: ['yes'], //Required option
    };

    wrapper = mount(<Option {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have default color', () => {
    expect(wrapper).toHaveStyleRule('color', '#000000');
  });

  test('Should have custom color', () => {
    const props = {
      fieldColor: 'red',
      answer: ['yes'], //Required option
    };

    wrapper = mount(<Option {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('color', 'red');
  });

  test('Should have default color', () => {
    expect(wrapper).toHaveStyleRule('border', '1px solid #39C1DF');
  });

  test('Should have custom color', () => {
    const props = {
      fieldBorderColor: '10px dotted green',
      answer: ['yes'], //Required option
    };

    wrapper = mount(<Option {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('border', '10px dotted green');
  });
});
