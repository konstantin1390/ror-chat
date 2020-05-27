import { act } from 'react-dom/test-utils';
import React from 'react';
import { Body } from '../Body';
import BodyConsumer from '../Body';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

describe('Body component', () => {
  let wrapper;
  let bodyWrapper;
  let sendMessage;

  beforeEach(() => {
    sendMessage = jest.fn();

    let props = {
      messagesHistory: [
        {
          type: 'botMessage',
          data: {
            type: 'text',
            responseText:
              'You will be redirected toave to enter a security code provided by your bank. ',
            responseActions: false,
            responseImageURL: '',
            responseID: '0.9839613481985006',
            time: '10:22',
          },
        },
      ],
      sendMessage: sendMessage,
    };

    wrapper = shallow(<Body {...props} />);

    act(() => {
      wrapper.update();
    });
    bodyWrapper = wrapper.find('.sbu-body');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined bodyWrapper component', () => {
    expect(bodyWrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should rendered one bodyWrapper ', () => {
    expect(bodyWrapper.length).toBe(1);
  });

  test('Should be "BodyConsumer"', () => {
    wrapper = mount(<BodyConsumer />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
