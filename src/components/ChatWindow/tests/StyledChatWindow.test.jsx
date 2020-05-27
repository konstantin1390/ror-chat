import { act } from 'react-dom/test-utils';
import React from 'react';
import { mount } from 'enzyme';
import WindowWrapper from '../StyledChatWindow';
import { logoImg } from '../../../constants';
import 'jest-styled-components';

describe('StyledChatWindow component', () => {
  let wrapper;
  let props = {
    logoUrl: './images/logo.svg',
    bodyBackground: 'red',
    currentWidth: 200,
    currentHeight: 200,
    currentPosition: {
      right: 20,
      bottom: 20,
      top: 20,
      left: 20,
    },
  };

  beforeEach(() => {
    wrapper = mount(<WindowWrapper {...props} />);

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

  test('Should have default border', () => {
    wrapper = mount(<WindowWrapper {...props} />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).toHaveStyleRule('border', '1px solid none');
  });

  test('Should have custom border', () => {
    const windowBorderColor = '#ffffff';
    wrapper = mount(<WindowWrapper {...props} windowBorderColor={windowBorderColor} />);

    act(() => {
      wrapper.update();
    });
    expect(wrapper).toHaveStyleRule('border', '1px solid #ffffff');
  });

  test('Should have custom background', () => {
    const props = {
      currentWidth: 200,
      currentHeight: 200,
      currentPosition: {
        right: 20,
        bottom: 20,
        top: 20,
        left: 20,
      },
    };
    let wrapper = mount(<WindowWrapper {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background', '#F5F8FF');
  });

  test('Should have custom logoUrl', () => {
    let props = {
      currentWidth: 200,
      currentHeight: 200,
      currentPosition: {
        right: 20,
        bottom: 20,
        top: 20,
        left: 20,
      },
    };
    let wrapper = mount(<WindowWrapper {...props} />);

    act(() => {
      wrapper.update();
    });

    expect(wrapper).toHaveStyleRule('background-image', `url('${logoImg}')`);
  });

  test('background', () => {
    expect(wrapper).toHaveStyleRule('background', 'red');
  });

  test('background-size', () => {
    expect(wrapper).toHaveStyleRule('background-size', '250px');
  });

  test('background-image', () => {
    expect(wrapper).toHaveStyleRule('background-image', `url('./images/logo.svg')`);
  });

  describe('properties with isFullScreen', () => {
    let wrapper;
    let props = {
      isFullScreen: true,
      currentWidth: 200,
      currentHeight: 200,
      currentPosition: {
        right: 20,
        bottom: 20,
        top: 20,
        left: 20,
      },
    };

    beforeEach(() => {
      wrapper = mount(<WindowWrapper {...props} />);

      act(() => {
        wrapper.update();
      });
    });

    afterEach(() => jest.clearAllMocks());

    describe('with media only screen and (min-width: 500px)', () => {
      test('width', () => {
        expect(wrapper).toHaveStyleRule('width', `100%`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('height', () => {
        expect(wrapper).toHaveStyleRule('height', `calc(var(--vh,1vh) * 100)`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('bottom', () => {
        expect(wrapper).toHaveStyleRule('bottom', `0`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('right', () => {
        expect(wrapper).toHaveStyleRule('right', `0`, {
          media: 'only screen and (min-width: 500px)',
        });
      });
    });

    describe('with media only screen and (min-width: 1024px)', () => {
      test('padding', () => {
        expect(wrapper).toHaveStyleRule(
          'padding',
          `0 calc((100% - 1024px) / 2 + 10px) 20px calc((100% - 1024px) / 2 + 10px)`,
          {
            media: 'only screen and (min-width: 1024px)',
            modifier: '.sbu-body__box',
          },
        );
      });
    });

    describe('with media only screen and (min-width: 1800px)', () => {
      test('width', () => {
        expect(wrapper).toHaveStyleRule('width', '100%', {
          media: 'only screen and (min-width: 1800px)',
        });
      });

      test('height', () => {
        expect(wrapper).toHaveStyleRule('height', 'calc(var(--vh,1vh) * 100)', {
          media: 'only screen and (min-width: 1800px)',
        });
      });

      test('bottom', () => {
        expect(wrapper).toHaveStyleRule('bottom', '0', {
          media: 'only screen and (min-width: 1800px)',
        });
      });

      test('right', () => {
        expect(wrapper).toHaveStyleRule('right', '0', {
          media: 'only screen and (min-width: 1800px)',
        });
      });
    });
  });

  describe('properties without isFullScreen', () => {
    let wrapper;
    let props = {
      isFullScreen: false,
      currentWidth: 200,
      currentHeight: 200,
      currentPosition: {
        right: 20,
        bottom: 20,
        top: 20,
        left: 20,
      },
    };

    beforeEach(() => {
      wrapper = mount(<WindowWrapper {...props} />);

      act(() => {
        wrapper.update();
      });
    });

    afterEach(() => jest.clearAllMocks());

    describe('width media only screen and (min-width: 500px)', () => {
      test('width', () => {
        expect(wrapper).toHaveStyleRule('width', `${props.currentWidth}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('height', () => {
        expect(wrapper).toHaveStyleRule('height', `${props.currentHeight}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('bottom', () => {
        expect(wrapper).toHaveStyleRule('bottom', `${props.currentPosition.bottom}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('right', () => {
        expect(wrapper).toHaveStyleRule('right', `${props.currentPosition.right}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });
    });

    describe('width media only screen and (min-width: 1024px)', () => {
      test('padding', () => {
        expect(wrapper).toHaveStyleRule('padding', `0 10px 20px 10px`, {
          media: 'only screen and (min-width: 1024px)',
          modifier: '.sbu-body__box',
        });
      });
    });

    describe('width media only screen and (min-width: 1800px)', () => {
      test('width', () => {
        expect(wrapper).toHaveStyleRule('width', `${props.currentWidth}px`, {
          media: 'only screen and (min-width: 1800px)',
        });
      });

      test('height', () => {
        expect(wrapper).toHaveStyleRule('height', `${props.currentHeight}px`, {
          media: 'only screen and (min-width: 1800px)',
        });
      });

      test('bottom', () => {
        expect(wrapper).toHaveStyleRule('bottom', `${props.currentPosition.bottom}px`, {
          media: 'only screen and (min-width: 1800px)',
        });
      });

      test('right', () => {
        expect(wrapper).toHaveStyleRule('right', `${props.currentPosition.right}px`, {
          media: 'only screen and (min-width: 1800px)',
        });
      });
    });
  });

  describe('properties with isRightResize', () => {
    let wrapper;
    let props = {
      isFullScreen: false,
      isRightResize: true,
      currentWidth: 200,
      currentHeight: 200,
      currentPosition: {
        right: 20,
        bottom: 20,
        top: 20,
        left: 20,
      },
    };

    beforeEach(() => {
      wrapper = mount(<WindowWrapper {...props} />);

      act(() => {
        wrapper.update();
      });
    });

    afterEach(() => jest.clearAllMocks());

    describe('with media only screen and (min-width: 500px)', () => {
      test('bottom', () => {
        expect(wrapper).toHaveStyleRule('bottom', `auto`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('right', () => {
        expect(wrapper).toHaveStyleRule('right', `auto`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('top', () => {
        expect(wrapper).toHaveStyleRule('top', `${props.currentPosition.top}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('left', () => {
        expect(wrapper).toHaveStyleRule('left', `${props.currentPosition.left}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });
    });

    describe('with media only screen and (min-width: 1800px)', () => {
      test('bottom', () => {
        expect(wrapper).toHaveStyleRule('bottom', `auto`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('right', () => {
        expect(wrapper).toHaveStyleRule('right', `auto`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('top', () => {
        expect(wrapper).toHaveStyleRule('top', `${props.currentPosition.top}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });

      test('left', () => {
        expect(wrapper).toHaveStyleRule('left', `${props.currentPosition.left}px`, {
          media: 'only screen and (min-width: 500px)',
        });
      });
    });
  });
});
