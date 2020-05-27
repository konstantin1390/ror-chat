import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import StyledBody from '../StyledBody';
import 'jest-styled-components';

describe('StyledBody component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<StyledBody inputHeight={1000} headerHeight={200} />);

    act(() => {
      wrapper.update();
    });
  });
  test('height', () => {
    expect(wrapper).toHaveStyleRule('height', 'calc( 100% - 200 )');
  });
});
