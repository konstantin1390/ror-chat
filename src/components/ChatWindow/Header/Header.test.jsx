import React from 'react';
import { act } from 'react-dom/test-utils';
import { Header } from './Header';
import HeaderConsumer from './Header';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe('Header component', () => {
  let img;
  let wrapper;
  let componentExit;
  let toggleEnabled;
  let setFullScreen;
  let componentHeader;
  let componentWrapper;

  beforeEach(() => {
    toggleEnabled = jest.fn();
    setFullScreen = jest.fn();
    const props = {
      toggleEnabled: toggleEnabled,
      setFullScreen: setFullScreen,
    };

    wrapper = mount(<Header {...props} />);

    act(() => {
      wrapper.update();
    });

    componentExit = wrapper.find('.sbu-header-wrapper__exit');
    componentHeader = wrapper.find('.sbu-Chat-window__header sbu-header');
    componentWrapper = wrapper.find('.sbu-header__header-wrapper sbu-header-wrapper');
    img = wrapper.find('img').find('.sbu-nav__exit');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined Exit component', () => {
    expect(componentExit).not.toBeUndefined();
  });

  test('Should not be undefined Wrapper component', () => {
    expect(componentWrapper).not.toBeUndefined();
  });

  test('Should not be undefined Header component', () => {
    expect(componentHeader).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should rendered wrapper', () => {
    const header = wrapper.find('.sbu-header-wrapper');
    expect(header.props().className).toEqual('sbu-header__header-wrapper sbu-header-wrapper');
  });

  test('Should rendered header', () => {
    const wrapperHeader = wrapper.find('.sbu-header-wrapper');
    const header = wrapperHeader.find('.sbu-header-wrapper__text');
    expect(header.props().className).toEqual('sbu-header-wrapper__text');
  });

  test('Should have custom background', () => {
    const props = {
      headerBackground: 'red',
    };

    let wrapper = mount(<Header {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have custom textColor', () => {
    const props = {
      headerColor: 'red',
    };

    let wrapper = mount(<Header {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('color', 'red');
  });

  test('Should have custom headerHeight', () => {
    const props = {
      headerHeight: '100px',
    };

    let wrapper = mount(<Header {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('min-height', '100px');
  });

  describe('Exit Image', () => {
    test('Should render', () => {
      const img = wrapper.find('img').find('.sbu-nav__change-size');
      expect(img).toHaveLength(1);
      expect(img.length).toBe(1);
    });

    test('Should have custom alt attribute', () => {
      const img = wrapper.find('img').find('.sbu-nav__exit');
      expect(img.props().alt).toBe('exit');
    });

    test('Should call "toggleEnabled" on click action', () => {
      img.simulate('click');
      expect(wrapper.props().toggleEnabled).toBeCalled();
      expect(toggleEnabled).toBeCalled();
    });
  });

  test('Should be "HeaderConsumer"', () => {
    wrapper = mount(<HeaderConsumer />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });

  test('Should called handler', () => {
    const toggleFullScreen = jest.fn();
    const changeSizeImg = jest.fn();
    const props = {
      isFullScreen: true,
      toggleFullScreen: toggleFullScreen,
      changeSizeImg: changeSizeImg,
    };

    wrapper = mount(<Header {...props} />);

    act(() => {
      wrapper.update();
    });
    const sizeImg = wrapper.find('.sbu-nav__change-size');
    sizeImg.simulate('click');
    expect(toggleFullScreen).toBeCalled();
    expect(changeSizeImg).toBeCalled();
  });
});
