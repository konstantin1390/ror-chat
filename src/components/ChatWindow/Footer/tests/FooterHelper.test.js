import { changeHeight, cutValue } from '../FooterHelper';

describe('changeHeight function', () => {
  test('should be defined', () => {
    const setInputHeight = jest.fn();
    const inputValue = '';
    const setInputValue = jest.fn();
    expect(changeHeight(setInputHeight, inputValue, setInputValue)).toBeDefined();
  });

  test('should return a function', () => {
    const setInputHeight = jest.fn();
    const inputValue = '';
    const setInputValue = jest.fn();
    expect(changeHeight(setInputHeight, inputValue, setInputValue)).toBeInstanceOf(Function);
  });

  test('should called a functions', () => {
    const setInputHeight = jest.fn();
    const inputValue = '';
    const setInputValue = jest.fn();
    const e = 100;
    changeHeight(setInputHeight, inputValue, setInputValue)(e);
    expect(setInputHeight).toBeCalled();
    expect(setInputValue).toBeCalled();
  });
});

describe('cutValue function', () => {
  test('should cut value', () => {
    const someValue = 'some textt';
    expect(cutValue(someValue)).toBe('some text');
  });
});
