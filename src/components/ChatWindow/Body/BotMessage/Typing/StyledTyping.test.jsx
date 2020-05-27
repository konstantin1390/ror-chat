import React from 'react';
import StyledTyping from './StyledTyping';
import { mount } from 'enzyme/build';
import 'jest-styled-components';

describe('StyledTyping component', () => {
  test('Should have background none with typingGif', () => {
    const typingGif = 'custom url';
    const wrapper = mount(<StyledTyping typingGif={typingGif} />);
    expect(wrapper).toHaveStyleRule('background', 'none');
  });
  test('Should have background #e5e5e5 without typingGif', () => {
    const wrapper = mount(<StyledTyping />);
    expect(wrapper).toHaveStyleRule('background', '#e5e5e5');
  });
});
