import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import StyledVideo from '../StyledVideo';
import 'jest-styled-components';

describe('StyledVideo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StyledVideo />);

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

  test('Should have 100% width without isFullScreen props', () => {
    expect(wrapper).toHaveStyleRule('width', '100%', {
      media: 'only screen and (min-width: 700px)',
    });
  });

  test('Should have 100% height without isFullScreen props', () => {
    expect(wrapper).toHaveStyleRule('height', '100%', {
      media: 'only screen and (min-width: 700px)',
    });
  });

  test('Should have 600px width with isFullScreen props', () => {
    wrapper = mount(<StyledVideo isFullScreen={true} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('width', '600px', {
      media: 'only screen and (min-width: 700px)',
    });
  });

  test('Should have 400px height with isFullScreen props', () => {
    wrapper = mount(<StyledVideo isFullScreen={true} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('height', '400px', {
      media: 'only screen and (min-width: 700px)',
    });
  });
});
