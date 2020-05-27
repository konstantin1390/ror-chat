import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount, shallow } from 'enzyme';
import WindowResize from '../WindowResize';
import 'jest-styled-components';

describe('WindowResize component', () => {
  let wrapper;
  let bodyComponent;
  let headerComponent;
  let footerComponent;
  let props = {
    messagesHistory: [
      {
        type: 'botMessage',
        data: {
          type: 'text',
          responseText:
            'You will be redirected toave to enter a security code provided by your bank. ',
          responseActions: false,
          responseImageURL: '',
          responseID: '0.9839613481985006',
          time: '10:22',
        },
      },
    ],
    currentPosition: {
      right: 20,
      bottom: 20,
    },
    inputPlaceholder: 'inputPlaceholder',
    headerText: 'headerText',
    headerHeight: '100px',
    logoUrl: './images/logo.svg',
    bodyBackground: 'red',
  };

  beforeEach(() => {
    wrapper = shallow(<WindowResize {...props} />);

    act(() => {
      wrapper.update();
    });

    bodyComponent = wrapper.find('.sbu-body');
    headerComponent = wrapper.find('.sbu-header');
    footerComponent = wrapper.find('.sbu-footer');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined', () => {
    expect(headerComponent).not.toBeUndefined();
  });

  test('Should not be undefined', () => {
    expect(bodyComponent).not.toBeUndefined();
  });

  test('Should not be undefined', () => {
    expect(footerComponent).not.toBeUndefined();
  });

  test('Should called setCurrentWithHandler handler', () => {
    const setCurrentWidth = jest.fn();
    const setCurrentHeight = jest.fn();
    const onResize = jest.fn(() => {
      setCurrentWidth();
      setCurrentHeight();
    });
    const props = {
      setCurrentHeight: setCurrentHeight,
      setCurrentWidth: setCurrentWidth,
      currentSize: { width: 200, height: 200 },
      windowCurrentWidth: 1000,
      windowCurrentHeight: 1000,
      inputPlaceholder: 'inputPlaceholder',
      headerText: 'headerText',
      currentPosition: {
        right: 20,
        bottom: 20,
      },
    };

    wrapper = mount(<WindowResize {...props} />);

    act(() => {
      wrapper.update();
    });

    const resizable = wrapper.find('Resizable');
    resizable.props().onResize = onResize;
    resizable.props().onResize();
    expect(setCurrentWidth).toBeCalled();
    expect(setCurrentHeight).toBeCalled();
  });

  test('Should called changeCurrentSize handler', () => {
    const setCurrentWidth = jest.fn();
    const setCurrentHeight = jest.fn();
    const changeCurrentSize = jest.fn();
    const onResizeStop = jest.fn(() => {
      changeCurrentSize();
    });
    const props = {
      setCurrentHeight: setCurrentHeight,
      setCurrentWidth: setCurrentWidth,
      changeCurrentSize: changeCurrentSize,
      currentSize: { width: 200, height: 200 },
      windowCurrentWidth: 1000,
      windowCurrentHeight: 1000,
      inputPlaceholder: 'inputPlaceholder',
      headerText: 'headerText',
      currentPosition: {
        right: 20,
        bottom: 20,
      },
    };

    wrapper = mount(<WindowResize {...props} />);

    act(() => {
      wrapper.update();
    });

    const resizable = wrapper.find('Resizable');
    resizable.props().onResizeStop = onResizeStop;
    resizable.props().onResizeStop();
    expect(changeCurrentSize).toBeCalled();
  });
});
