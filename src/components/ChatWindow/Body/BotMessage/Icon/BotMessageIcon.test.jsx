import { act } from 'react-dom/test-utils';
import 'jest-styled-components';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { BotMessageIcon } from './BotMessageIcon';
import { avatarImg } from '../../../../../constants';
import BotMessageIconConsumer from './BotMessageIcon';

describe('BotMessageIcon component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<BotMessageIcon />);

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
    const avatarWrapper = wrapper.find('.sbu-bot-message__icon');
    expect(avatarWrapper).toHaveStyleRule('background', '#39C1DF');
  });

  test('Should have custom Background', () => {
    const props = {
      messageIconBackgroundBot: 'red',
    };

    wrapper = mount(<BotMessageIcon {...props} />);

    act(() => {
      wrapper.update();
    });

    const avatarWrapper = wrapper.find('.sbu-bot-message__icon');
    expect(avatarWrapper).toHaveStyleRule('background', 'red');
  });

  describe('Image', () => {
    test('Should render', () => {
      const img = wrapper.find('img');
      expect(img).toHaveLength(1);
      expect(img.length).toBe(1);
    });

    test('Should have default src attribute', () => {
      const img = wrapper.find('img');
      expect(img.props().src).toBe(avatarImg);
    });

    test('Should have custom src attribute', () => {
      const props = {
        messageIconUrlBot: 'custom url',
      };

      wrapper = mount(<BotMessageIcon {...props} />);

      act(() => {
        wrapper.update();
      });

      const img = wrapper.find('img');
      expect(img.props().src).toBe('custom url');
    });

    test('Should have "iconAvatar" alt attribute', () => {
      const img = wrapper.find('img');
      expect(img.props().alt).toBe('BotMessageIcon');
    });
  });

  test('Should be "BotMessageIconConsumer"', () => {
    wrapper = shallow(<BotMessageIconConsumer />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
