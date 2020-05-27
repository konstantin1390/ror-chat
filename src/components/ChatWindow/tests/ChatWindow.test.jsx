import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import { ChatWindow } from '../ChatWindow';
import 'jest-styled-components';

describe('ChatWindow component', () => {
  let wrapper;
  let componentWindow;

  beforeEach(() => {
    wrapper = mount(<ChatWindow />);

    act(() => {
      wrapper.update();
    });

    componentWindow = wrapper.find('.Chat-window');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined Window component', () => {
    expect(componentWindow).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });
});
