import { act } from 'react-dom/test-utils';
import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';
import Typing from './Typing';

describe('Typing component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Typing />);

    act(() => {
      wrapper.update();
    });
  });

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should render StyledTyping with isTyping', () => {
    wrapper = mount(<Typing isTyping={true} typingGif={'custom url'} />);

    act(() => {
      wrapper.update();
    });
    const StyledTyping = wrapper.find('.sbu-message__typing');
    expect(StyledTyping).not.toBeUndefined();
  });

  test('Should render css animation without typingGif', () => {
    wrapper = mount(<Typing isTyping={true} />);

    act(() => {
      wrapper.update();
    });
    const animationDiv = wrapper.find('.sbu-circle');
    expect(animationDiv).not.toBeUndefined();
  });

  test('Should render img with typingGif', () => {
    wrapper = mount(<Typing isTyping={true} typingGif={'custom url'} />);

    act(() => {
      wrapper.update();
    });
    const img = wrapper.find('img');
    expect(img).not.toBeUndefined();
  });
});
