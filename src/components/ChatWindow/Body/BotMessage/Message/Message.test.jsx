import React from 'react';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import { Message } from './Message';
import MessageConsumer from './Message';

describe('Message component', () => {
  let wrapper;
  let botMessageTxt;
  let botMessageImg;
  let botMessageVideo;

  beforeEach(() => {
    botMessageTxt = {
      type: 'text',
      responseText: 'Response text',
      responseAction: 'ResponseAсtion',
      nextResponse: 'next resp id',
    };
    botMessageImg = {
      type: 'image',
      responseAction: 'ResponseAction',
      responseImageURL: 'image Url',
    };
    botMessageVideo = {
      type: 'video',
      responseAction: 'ResponseAction',
      responseVideoURL: 'Video URL',
    };

    const props = {
      value: botMessageTxt,
      hasIcon: true,
    };
    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });
  });

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should have default Background', () => {
    const messageWrapper = wrapper.find('.sbu-answer__message');
    expect(messageWrapper).toHaveStyleRule('background', '#39C1DF');
  });

  test('Should have custom Background', () => {
    const props = {
      messageBackgroundBot: 'red',
      value: botMessageTxt,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const messageWrapper = wrapper.find('.sbu-answer__message');
    expect(messageWrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have default color', () => {
    const messageWrapper = wrapper.find('.sbu-answer__message');
    expect(messageWrapper).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have custom color', () => {
    const props = {
      messageColorBot: 'red',
      value: botMessageTxt,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const messageWrapper = wrapper.find('.sbu-answer__message');
    expect(messageWrapper).toHaveStyleRule('color', 'red');
  });

  test('Should have default border', () => {
    const messageWrapper = wrapper.find('.sbu-answer__message');
    expect(messageWrapper).toHaveStyleRule('border', '1px solid #39C1DF');
  });

  test('Should have custom border', () => {
    const props = {
      messageBorderColorBot: 'black',
      value: botMessageTxt,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const messageWrapper = wrapper.find('.sbu-answer__message');
    expect(messageWrapper).toHaveStyleRule('border', '1px solid black');
  });

  test('Should have render span tag width text message type', () => {
    const props = {
      value: botMessageTxt,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const message = wrapper.find('span');
    expect(message).toHaveLength(1);
  });

  test('Should have text like in response value', () => {
    const props = {
      value: botMessageTxt,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const message = wrapper.find('span');
    expect(message.text()).toBe('Response text');
  });

  test('Should have render img tag width image message type', () => {
    const props = {
      toggleFullScreenHandler: jest.fn(),
      value: botMessageImg,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const messageImg = wrapper.find('img');
    expect(messageImg).toHaveLength(1);
  });

  test('Should have url like in response value', () => {
    const props = {
      toggleFullScreenHandler: jest.fn(),
      value: botMessageImg,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const messageImg = wrapper.find('img');
    expect(messageImg.props().src).toBe('image Url');
  });

  test('Should have render Video comp width video message type', () => {
    const props = {
      value: botMessageVideo,
      hasIcon: true,
    };

    wrapper = mount(<Message {...props} />);

    act(() => {
      wrapper.update();
    });

    const messageVideo = wrapper.find('Video');
    expect(messageVideo).toHaveLength(1);
  });

  test('Should be "MessageConsumer"', () => {
    wrapper = shallow(<MessageConsumer />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
