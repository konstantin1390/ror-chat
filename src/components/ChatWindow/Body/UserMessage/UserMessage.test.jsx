import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import { UserMessage } from './UserMessage';
import UserMessageConsumer from './UserMessage';
import 'jest-styled-components';

import { iconUser } from '../../../../constants';

describe('UserMessage component', () => {
  let wrapper;
  let textWrapper;
  let iconWrapper;
  let messageWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserMessage
        value={{
          inputText: 'dfh',
          userID: '42gpj3',
          clientData: '3956946',
          userSubscription: null,
          payload: 'UYFIX7PQ5274UZH2XLJT',
        }}
        hasIcon={true}
      />,
    );

    act(() => {
      wrapper.update();
    });

    messageWrapper = wrapper.find('.sbu-body__user-message');
    textWrapper = wrapper.find('span');
    iconWrapper = wrapper.find('img');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined UserMessage component', () => {
    expect(messageWrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should rendered one messageWrapper ', () => {
    let wrapper = shallow(
      <UserMessage
        value={{
          inputText: 'dfh',
          userID: '42gpj3',
          clientData: '3956946',
          userSubscription: null,
          payload: 'UYFIX7PQ5274UZH2XLJT',
        }}
        hasIcon={true}
      />,
    );

    act(() => {
      wrapper.update();
    });
    messageWrapper = wrapper.find('.sbu-body__user-message');

    expect(messageWrapper.length).toBe(1);
  });

  test('Should rendered one iconWrapper ', () => {
    expect(iconWrapper.length).toBe(1);
  });

  test('Should have custom text color', () => {
    const props = {
      messageColor: 'red',
      value: {
        inputText: 'dfh',
        userID: '42gpj3',
        clientData: '3956946',
        userSubscription: null,
        payload: 'UYFIX7PQ5274UZH2XLJT',
      },
      hasIcon: true,
    };

    let wrapper = mount(<UserMessage {...props} />);

    act(() => {
      wrapper.update();
    });

    const messWrapper = wrapper.find('span');
    expect(messWrapper).toHaveStyleRule('color', 'red');
  });

  test('Should have custom messageBackground', () => {
    const props = {
      messageBackground: 'green',
      value: {
        inputText: 'dfh',
        userID: '42gpj3',
        clientData: '3956946',
        userSubscription: null,
        payload: 'UYFIX7PQ5274UZH2XLJT',
      },
      hasIcon: true,
    };

    let wrapper = mount(<UserMessage {...props} />);

    act(() => {
      wrapper.update();
    });

    const messWrapper = wrapper.find('span');
    expect(messWrapper).toHaveStyleRule('background', 'green');
  });

  test('Should have custom messageBorderColor', () => {
    const props = {
      messageBorderColor: 'green',
      value: {
        inputText: 'dfh',
        userID: '42gpj3',
        clientData: '3956946',
        userSubscription: null,
        payload: 'UYFIX7PQ5274UZH2XLJT',
      },
      hasIcon: true,
    };

    let wrapper = mount(<UserMessage {...props} />);

    act(() => {
      wrapper.update();
    });
    const messWrapper = wrapper.find('span');
    expect(messWrapper).toHaveStyleRule('border', '1px solid green');
  });

  test('Should have custom messageBorderColo', () => {
    const props = {
      messageIconUrl: 'green',
      value: {
        inputText: 'dfh',
        userID: '42gpj3',
        clientData: '3956946',
        userSubscription: null,
        payload: 'UYFIX7PQ5274UZH2XLJT',
      },
      hasIcon: true,
    };

    let wrapper = mount(<UserMessage {...props} />);

    act(() => {
      wrapper.update();
    });

    const img = wrapper.find('img');
    expect(img.props().src).toBe('green');
  });

  test('Should have default src attribute', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(iconUser);
  });

  test('Should be "UserMessageConsumer"', () => {
    wrapper = mount(
      <UserMessageConsumer
        value={{
          inputText: 'dfh',
          userID: '42gpj3',
          clientData: '3956946',
          userSubscription: null,
          payload: 'UYFIX7PQ5274UZH2XLJT',
        }}
        hasIcon={true}
      />,
    );

    act(() => {
      wrapper.update();
    });
    expect(wrapper).not.toBeUndefined();
  });
});
