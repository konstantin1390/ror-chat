import { act } from 'react-dom/test-utils';
import React from 'react';
import { Body } from '../Body';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

describe('Body component', () => {
  let wrapper;
  let bodyWrapper;

  beforeEach(() => {
    wrapper = shallow(<Body />);

    act(() => {
      wrapper.update();
    });

    bodyWrapper = wrapper.find('.body');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined bodyWrapper component', () => {
    expect(bodyWrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should rendered one bodyWrapper ', () => {
    expect(bodyWrapper.length).toBe(1);
  });

  test('Should have custom background', () => {
    const props = {
      bodyBackground: 'red',
    };

    let wrapper = mount(<Body {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have custom headerHeight', () => {
    const props = {
      headerHeight: '100px',
    };

    let wrapper = mount(<Body {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('height', 'calc( 100% - 100px )');
  });

  test('Should have custom logoUrl', () => {
    const props = {
      logoUrl: './images/logo.svg',
    };

    let wrapper = mount(<Body {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background-image', "url('./images/logo.svg')");
  });
});
