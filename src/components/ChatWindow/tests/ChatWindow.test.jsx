import { act } from 'react-dom/test-utils';
import React from 'react';
import { shallow } from 'enzyme';
import { ChatWindow } from '../ChatWindow';
import ChatWindowConsumer from '../ChatWindow';
import 'jest-styled-components';

describe('ChatWindow component', () => {
  let wrapper;
  let componentWindow;
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
    windowCurrentWidth: 100,
    windowCurrentHeight: 400,
    inputPlaceholder: 'inputPlaceholder',
    headerText: 'headerText',
    headerHeight: '100px',
    logoUrl: './images/logo.svg',
    bodyBackground: 'red',
  };

  beforeEach(() => {
    wrapper = shallow(<ChatWindow {...props} />);

    act(() => {
      wrapper.update();
    });

    componentWindow = wrapper.find('.sbu-Chat-window');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should be "ChatWindowConsumer"', () => {
    wrapper = shallow(<ChatWindowConsumer />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
