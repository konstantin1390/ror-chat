import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import { Footer } from '../Footer';
import FooterConsumer from '../Footer';
import 'jest-styled-components';

import { sendImg } from '../../../../constants';

describe('Footer component', () => {
  let img;
  let button;
  let wrapper;
  let textarea;
  let inputWrapper;
  let footerWrapper;
  let sendMessage;
  let setInputValue;
  let setInputHeight;
  let setIsClickedOption;

  beforeEach(() => {
    sendMessage = jest.fn();
    setInputValue = jest.fn();
    setInputHeight = jest.fn();
    setIsClickedOption = jest.fn();
    wrapper = mount(
      <Footer
        inputPlaceholder={'inputPlaceholder'}
        sendMessage={sendMessage}
        setInputHeight={setInputHeight}
        inputValue={'inputValue'}
        setInputValue={setInputValue}
        setIsClickedOption={setIsClickedOption}
      />,
    );

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

    let wrapper = mount(<Footer {...props} inputPlaceholder={'inputPlaceholder'} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have custom footerBorderColor', () => {
    const props = {
      footerBorderColor: 'red',
    };

    let wrapper = mount(<Footer {...props} inputPlaceholder={'inputPlaceholder'} />);

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

    test('Should call "sendMessage" on click action', () => {
      img.simulate('click');
      expect(wrapper.props().sendMessage).toBeCalled();
    });

    test('Should call "setIsClickedOption" on click action', () => {
      img.simulate('click');
      expect(wrapper.props().setIsClickedOption).toBeCalled();
    });

    test('Should call "setInputValue" on click action', () => {
      img.simulate('click');
      expect(wrapper.props().setInputValue).toBeCalled();
    });
  });

  test('Should be "FooterConsumer"', () => {
    wrapper = mount(
      <FooterConsumer
        inputPlaceholder={'inputPlaceholder'}
        sendMessage={sendMessage}
        setInputHeight={setInputHeight}
        inputValue={'inputValue'}
        setInputValue={setInputValue}
        setIsClickedOption={setIsClickedOption}
      />,
    );

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });

  test('Should called setInputHandler', () => {
    const setInputValue = jest.fn();
    const props = {
      setInputValue: setInputValue,
      inputPlaceholder: 'inputPlaceholder',
    };

    wrapper = mount(<Footer {...props} />);

    act(() => {
      wrapper.update();
    });
    const textArea = wrapper.find('TextareaAutosize');
    textArea.simulate('change', {
      target: { name: 'input', value: 'some text' },
    });
    expect(setInputValue).toBeCalled();
  });

  test('Should called keyPressHandler', () => {
    const setIsClickedOption = jest.fn();
    const sendMessage = jest.fn();
    const setInputValue = jest.fn();
    const props = {
      windowCurrentHeight: 20,
      windowCurrentWidth: 1300,
      inputValue: '',
      sendMessage: sendMessage,
      setInputValue: setInputValue,
      setIsClickedOption: setIsClickedOption,
      inputPlaceholder: 'inputPlaceholder',
    };

    wrapper = mount(<Footer {...props} />);

    act(() => {
      wrapper.update();
    });
    const textArea = wrapper.find('TextareaAutosize');
    textArea.simulate('keydown', { keyCode: 13, shiftKey: false });
    expect(setInputValue).toBeCalled();
    expect(setIsClickedOption).toBeCalled();
    expect(setInputValue).toBeCalled();
  });

  test('Should called keyPressHandler width shiftKey and new line last char', () => {
    const setInputValue = jest.fn();
    const props = {
      windowCurrentHeight: 20,
      windowCurrentWidth: 1300,
      inputValue: 'some text\n',
      setInputValue: setInputValue,
      inputPlaceholder: 'inputPlaceholder',
    };

    wrapper = mount(<Footer {...props} />);

    act(() => {
      wrapper.update();
    });
    const textArea = wrapper.find('TextareaAutosize');
    textArea.simulate('keydown', { keyCode: 13, shiftKey: true });
    expect(setInputValue).toBeCalled();
    expect(textArea.props().value).toBe('some text\n');
  });

  test('Should called changeHeightHandler', () => {
    const inputValue = '';
    const setInputValue = jest.fn();
    const changeHeightHandler = jest.fn(() => {
      setInputHeight();
      inputValue.trim() === '' && setInputValue('');
    });
    const onHeightChange = jest.fn(() => changeHeightHandler());
    const props = {
      setInputHeight: setInputHeight,
      inputValue: inputValue,
      setInputValue: setInputValue,
      inputPlaceholder: 'inputPlaceholder',
    };

    wrapper = mount(<Footer {...props} />);

    act(() => {
      wrapper.update();
    });
    const textArea = wrapper.find('TextareaAutosize');
    textArea.props().onHeightChange = onHeightChange;
    textArea.props().onHeightChange();
    expect(setInputHeight).toBeCalled();
  });
});
