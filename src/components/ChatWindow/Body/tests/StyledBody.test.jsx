import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import StyledBody from '../StyledBody';
import 'jest-styled-components';
import logoImg from '../../../../../public/images/logo.svg';

describe('StyledBody component', () => {
  describe('Should have default style rules', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<StyledBody />);

      act(() => {
        wrapper.update();
      });
    });
    test('background', () => {
      expect(wrapper).toHaveStyleRule('background', '#F5F8FF');
    });
    test('background-size', () => {
      expect(wrapper).toHaveStyleRule('background-size', '250px');
    });
    test('background-image', () => {
      expect(wrapper).toHaveStyleRule('background-image', `url('${logoImg}')`);
    });
  });

  describe('Should have custom style rules', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        bodyBackground: 'red',
        logoUrl: 'customUrl',
        logoSize: '500px',
      };
      wrapper = mount(<StyledBody {...props} />);

      act(() => {
        wrapper.update();
      });
    });

    test('background', () => {
      expect(wrapper).toHaveStyleRule('background', 'red');
    });
    test('background-size', () => {
      expect(wrapper).toHaveStyleRule('background-size', '500px');
    });
    test('background-image', () => {
      expect(wrapper).toHaveStyleRule('background-image', `url('customUrl')`);
    });
  });
});
