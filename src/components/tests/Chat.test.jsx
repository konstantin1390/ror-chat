import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import { Chat } from '../Chat';
import 'jest-styled-components';

describe('ChatWindow component', () => {
  let wrapper;
  let ChatIcon;
  beforeEach(() => {
    wrapper = mount(<Chat />);

    act(() => {
      wrapper.update();
    });
    ChatIcon = wrapper.find('.sbu-Chat-icon');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });
});
