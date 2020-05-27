import React from 'react';
import hideKeyboard, { setScrollStatus } from './logic';
import 'jest-styled-components';

describe('logic file', () => {
  const body = document.getElementsByTagName('body')[0];

  describe('setScrollStatus function', () => {
    test('should set scroll as hidden ', () => {
      setScrollStatus('hidden');
      expect(body.style.overflow).toBe('hidden');
    });

    test('should set scroll as auto ', () => {
      setScrollStatus('auto');
      const body = document.getElementsByTagName('body')[0];
      expect(body.style.overflow).toBe('auto');
    });
  });

  describe('hideKeyboard function', () => {
    test('should set width for body ', () => {
      const body = {
        focus: jest.fn(),
        style: {},
      };
      global.window.innerWidth = 200;
      hideKeyboard(body);
      expect(body.style.width).toBe(200);
    });

    test('should set height for body', () => {
      const body = {
        focus: jest.fn(),
        style: {},
      };
      global.window.innerHeight = 200;
      hideKeyboard(body);
      expect(body.style.height).toBe(200);
    });
  });
});
