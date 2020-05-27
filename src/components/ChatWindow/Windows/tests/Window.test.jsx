import { act } from 'react-dom/test-utils';
import React from 'react';
import { shallow } from 'enzyme';
import Window from '../Window';
import 'jest-styled-components';

describe('Window component', () => {
  let wrapper;
  let bodyComponent;
  let headerComponent;
  let footerComponent;
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
    inputPlaceholder: 'inputPlaceholder',
    headerText: 'headerText',
    headerHeight: '100px',
    logoUrl: './images/logo.svg',
    bodyBackground: 'red',
  };

  beforeEach(() => {
    wrapper = shallow(<Window {...props} />);

    act(() => {
      wrapper.update();
    });

    bodyComponent = wrapper.find('.sbu-body');
    headerComponent = wrapper.find('.sbu-header');
    footerComponent = wrapper.find('.sbu-footer');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should not be undefined', () => {
    expect(headerComponent).not.toBeUndefined();
  });

  test('Should not be undefined', () => {
    expect(bodyComponent).not.toBeUndefined();
  });

  test('Should not be undefined', () => {
    expect(footerComponent).not.toBeUndefined();
  });
});
