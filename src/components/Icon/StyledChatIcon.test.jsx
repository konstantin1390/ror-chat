import React from 'react';
import StyledChatIcon from './StyledChatIcon';
import { mount } from 'enzyme/build';
import 'jest-styled-components';

describe('StyledTyping component', () => {
  test('Should have bottom position 95px without bottomPosition prop', () => {
    const wrapper = mount(<StyledChatIcon />);
    expect(wrapper).toHaveStyleRule('bottom', '95px');
  });

  test('Should have custom bottom position with bottomPosition prop', () => {
    const bottomPosition = '20';
    const wrapper = mount(<StyledChatIcon bottomPosition={bottomPosition} />);
    expect(wrapper).toHaveStyleRule('bottom', '20px');
  });

  test('Should have right position 20px without rightPosition prop', () => {
    const wrapper = mount(<StyledChatIcon />);
    expect(wrapper).toHaveStyleRule('right', '20px');
  });

  test('Should have right right position with rightPosition prop', () => {
    const rightPosition = '100';
    const wrapper = mount(<StyledChatIcon rightPosition={rightPosition} />);
    expect(wrapper).toHaveStyleRule('right', '100px');
  });
});
