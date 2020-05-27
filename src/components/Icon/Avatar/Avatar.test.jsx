import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Avatar } from './Avatar';
import 'jest-styled-components';

import avatarImg from '../../../../public/images/avatar.svg';

describe('Avatar component', () => {
  let wrapper;
  let toggleEnabled;

  beforeEach(() => {
    toggleEnabled = jest.fn();
    const props = {
      toggleEnabled: toggleEnabled,
    };

    wrapper = mount(<Avatar {...props} />);

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

  test('Should call "toggleEnabled" on click action', () => {
    wrapper.simulate('click');
    expect(wrapper.props().toggleEnabled).toBeCalled();
    expect(toggleEnabled).toBeCalled();
  });

  test('Should have default Background', () => {
    const avatarWrapper = wrapper.find('.Chat-icon__avatar');
    expect(avatarWrapper).toHaveStyleRule('background', '#39C1DF');
  });

  test('Should have custom iconBackground', () => {
    const props = {
      iconBackground: 'red',
    };

    wrapper = mount(<Avatar {...props} />);

    act(() => {
      wrapper.update();
    });

    const avatarWrapper = wrapper.find('.Chat-icon__avatar');
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
        iconUrl: 'custom url',
      };

      wrapper = mount(<Avatar {...props} />);

      act(() => {
        wrapper.update();
      });

      const img = wrapper.find('img');
      expect(img.props().src).toBe('custom url');
    });

    test('Should have "iconAvatar" alt attribute', () => {
      const img = wrapper.find('img');
      expect(img.props().alt).toBe('iconAvatar');
    });
  });
});
