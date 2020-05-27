import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import { Footer } from './Footer';
import 'jest-styled-components';

import sendImg from '../../../../public/images/send.svg';

describe('Footer component', () => {
  let img;
  let button;
  let wrapper;
  let textarea;
  let inputWrapper;
  let footerWrapper;

  beforeEach(() => {
    wrapper = mount(<Footer />);

    act(() => {
      wrapper.update();
    });

    footerWrapper = wrapper.find('div');
    inputWrapper = footerWrapper.find('div');
    textarea = inputWrapper.find('div');
    button = inputWrapper.find('button');
    img = button.find('img');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined textarea component', () => {
    expect(textarea).not.toBeUndefined();
  });

  test('Should not be undefined FooterWrapper component', () => {
    expect(footerWrapper).not.toBeUndefined();
  });

  test('Should not be undefined InputWrapper component', () => {
    expect(inputWrapper).not.toBeUndefined();
  });

  test('Should not be undefined button ', () => {
    expect(button).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should have custom background', () => {
    const props = {
      footerBackground: 'red',
    };

    let wrapper = mount(<Footer {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have custom footerBorderColor', () => {
    const props = {
      footerBorderColor: 'red',
    };

    let wrapper = mount(<Footer {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('border-top', '1px solid red');
  });

  describe('send Image', () => {
    test('Should not be undefined img ', () => {
      expect(img).not.toBeUndefined();
    });

    test('Should have default src attribute', () => {
      expect(img.props().src).toBe(sendImg);
    });

    test('Should have custom alt attribute', () => {
      expect(img.props().alt).toBe('send');
    });
  });
});
