import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import StyledBotMessage from '../StyledBotMessage';
import 'jest-styled-components';

describe('StyledBody component', () => {
  let wrapper;

  test('Should have default margin-left at children `answer__options`', () => {
    wrapper = mount(<StyledBotMessage />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).toHaveStyleRule('margin-left', '55px', {
      modifier: '.sbu-answer__options',
    });
  });
  test('Should have custom margin-left at children `answer__options`', () => {
    const hasIcon = true;
    wrapper = mount(<StyledBotMessage hasIcon={hasIcon} />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).toHaveStyleRule('margin-left', '5px', {
      modifier: '.sbu-answer__options',
    });
  });
});
