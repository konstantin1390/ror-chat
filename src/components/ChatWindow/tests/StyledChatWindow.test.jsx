import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import StyledChatWindow from '../StyledChatWindow';
import 'jest-styled-components';

describe('StyledChatWindow component', () => {
  let wrapper;

  test('Should have default border', () => {
    wrapper = mount(<StyledChatWindow />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).toHaveStyleRule('border', '1px solid none');
  });

  test('Should have custom border', () => {
    const windowBorderColor = '#ffffff';
    wrapper = mount(<StyledChatWindow windowBorderColor={windowBorderColor} />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).toHaveStyleRule('border', '1px solid #ffffff');
  });
});
