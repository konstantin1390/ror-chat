import Icon from './Icon';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

describe('Icon component', () => {
  let wrapper;
  let componentAvatar;
  let componentMessage;

  beforeEach(() => {
    wrapper = shallow(<Icon />);

    act(() => {
      wrapper.update();
    });

    componentAvatar = wrapper.find('.sbu-Chat-icon__avatar');
    componentMessage = wrapper.find('.sbu-Chat-icon__message');
  });

  afterEach(() => jest.clearAllMocks());

  test('Should not be undefined', () => {
    expect(wrapper).not.toBeUndefined();
  });

  test('Should rendered', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should have className "sbu-chat-icon"', () => {
    expect(wrapper.props().className).toEqual('sbu-Chat-icon');
  });

  test('Should not be undefined Message component', () => {
    expect(componentMessage).not.toBeUndefined();
  });

  test('Should rendered Message component', () => {
    expect(componentMessage.length).toBe(1);
    expect(componentMessage).toHaveLength(1);
  });

  test('Should have className "sbu-chat-icon__message" in Massage component', () => {
    expect(componentMessage.props().className).toEqual('sbu-Chat-icon__message');
  });

  test('Should not be undefined Avatar component', () => {
    expect(componentAvatar).not.toBeUndefined();
  });

  test('Should rendered Avatar component', () => {
    expect(componentAvatar.length).toBe(1);
    expect(componentAvatar).toHaveLength(1);
  });

  test('Should have className "sbu-chat-icon__avatar" in Avatar component', () => {
    expect(componentAvatar.props().className).toEqual('sbu-Chat-icon__avatar');
  });

  test('Should rendered Avatar and Message components', () => {
    expect(componentAvatar.length).toBe(1);
    expect(componentAvatar).toHaveLength(1);

    expect(componentMessage.length).toBe(1);
    expect(componentMessage).toHaveLength(1);
  });
});
