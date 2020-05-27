import React from 'react';
import { act } from 'react-dom/test-utils';
import FastForwardButton from './FastForwardButton';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe('FastForwardButton component', () => {
  let wrapper;
  let FastForwardButtonWrapper;

  beforeEach(() => {
    wrapper = mount(<FastForwardButton />);

    act(() => {
      wrapper.update();
    });

    FastForwardButtonWrapper = wrapper.find('.sbu-fast-forward__icon');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not to be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not to be undefined FastForwardButtonWrapper component', () => {
    expect(FastForwardButtonWrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should rendered one FastForwardButtonWrapper ', () => {
    expect(FastForwardButtonWrapper.length).toBe(1);
  });

  test('Should call fastForwardHandler onClick', () => {
    const fastForwardHandler = jest.fn();
    let wrapper = mount(<FastForwardButton fastForwardHandler={fastForwardHandler} />);
    act(() => {
      wrapper.update();
    });

    wrapper.simulate('click');

    expect(fastForwardHandler).toBeCalled();
  });
});
