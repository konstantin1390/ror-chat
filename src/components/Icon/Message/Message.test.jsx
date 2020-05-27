import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Message } from './Message';
import MessageConsumer from './Message';
import 'jest-styled-components';

describe('Message component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Message lang={'en'} />);

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

  test('Should have default Background', () => {
    const messageWrapper = wrapper.find('.sbu-Chat-icon__message');
    expect(messageWrapper).toHaveStyleRule('background', '#39C1DF');
  });

  test('Should have custom Background', () => {
    const props = {
      iconMessageBackground: 'red',
    };

    wrapper = mount(<Message {...props} lang={'en'} />);

    act(() => {
      wrapper.update();
    });

    const messageWrapper = wrapper.find('.sbu-Chat-icon__message');
    expect(messageWrapper).toHaveStyleRule('background', 'red');
  });

  test('Should have default Text color', () => {
    const iconMessage = wrapper.find('.sbu-Chat-icon__message');
    expect(iconMessage).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have custom Text color', () => {
    const props = {
      iconMessageColor: 'red',
    };

    wrapper = mount(<Message {...props} lang={'en'} />);

    act(() => {
      wrapper.update();
    });

    const iconMessage = wrapper.find('.sbu-Chat-icon__message');
    expect(iconMessage).toHaveStyleRule('color', 'red');
  });

  test('Should have default Text', () => {
    const iconMessage = wrapper.find('.sbu-Chat-icon__message').find('span');
    expect(iconMessage.text()).toBe('Help with deposit?');
  });

  test('Should have custom Text', () => {
    const props = {
      iconMessageText: 'custom text',
    };

    wrapper = mount(<Message {...props} lang={'en'} />);

    act(() => {
      wrapper.update();
    });

    const iconMessage = wrapper.find('.sbu-Chat-icon__message').find('span');
    expect(iconMessage.text()).toBe('custom text');
  });

  test('Should be "MessageConsumer"', () => {
    wrapper = mount(<MessageConsumer lang={'en'} />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
