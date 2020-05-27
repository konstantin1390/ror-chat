import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import Image from '../Image';

describe('Image component', () => {
  let wrapper;
  let toggleFullScreenHandler;

  beforeEach(() => {
    toggleFullScreenHandler = jest.fn();
    wrapper = mount(<Image toggleFullScreenHandler={toggleFullScreenHandler} />);

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
