import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import Video from '../Video';

describe('Video component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Video />);

    act(() => {
      wrapper.update();
    });
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });
});
