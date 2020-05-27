import React from 'react';
import StyledTime from './StyledTime';
import { mount } from 'enzyme/build';
import 'jest-styled-components';

describe('StyledTyping component', () => {
  test('Should not have background ', () => {
    const value = { type: 'text' };
    const wrapper = mount(<StyledTime value={value} />);
    expect(wrapper).toHaveStyleRule('background', 'none');
  });

  test('Should have background ', () => {
    const value = { type: 'image' };
    const wrapper = mount(<StyledTime value={value} />);
    expect(wrapper).toHaveStyleRule('background', '#39C1DF');
  });

  test('Should custom background ', () => {
    const props = {
      messageBackgroundBot: 'red',
      value: { type: 'image' },
    };

    const wrapper = mount(<StyledTime {...props} />);
    expect(wrapper).toHaveStyleRule('background', 'red');
  });
});
