import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import { BotMessage } from '../BotMessage';
import BotMessageConsumer from '../BotMessage';
import 'jest-styled-components';

describe('BotMessage component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      hasIcon: true,
      value: {},
    };
    wrapper = mount(<BotMessage {...props} />);

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

  test('Should render option', () => {
    const props = {
      isClickedOption: false,
      hasIcon: true,
      value: {
        type: 'text',
        responseText: 'responseText',
        responseActions: ['1'],
      },
    };
    wrapper = mount(<BotMessage {...props} />);

    act(() => {
      wrapper.update();
    });

    const options = wrapper.find('.sbu-options');
    expect(options.length).toBe(1);
  });

  test('Should render options', () => {
    const props = {
      isClickedOption: false,
      hasIcon: true,
      lastSugID: 1,
      value: {
        type: 'text',
        responseText: 'responseText',
        responseActions: ['1', '2'],
        responseID: 1,
      },
    };
    wrapper = mount(<BotMessage {...props} />);

    act(() => {
      wrapper.update();
    });

    const options = wrapper.find('.sbu-options__option');
    expect(options.length).toBe(4); //4 because styled-component generate extra div with same class;
  });

  test('Should be "BotMessageConsumer"', () => {
    wrapper = mount(<BotMessageConsumer value={{}} hasIcon={true} />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
