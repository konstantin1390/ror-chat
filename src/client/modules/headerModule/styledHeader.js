import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  min-height: 3.2rem;
  color: ${props => props.headerColor || '#FFFFFF'};
  background: ${props => props.headerBackground || '#12171e'};
  top: 0;
  border: 1px solid ${props => props.headerBorderColor || 'black'};

  &:active {
    cursor: ${props => (props.isFullScreen ? 'default' : 'grabbing')};
  }
`;

// @media only screen and (min-width: 1024px) and (min-height: 570px) {
//   width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
// }

Header.icon = styled.div`
  height: 3rem;
  width: 3rem;
  margin: 0.25rem;
`;

Header.buttons = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  height: 100%;
`;

export const ExitBtn = styled.img`
  width: 1.2rem;
  margin-right: 0.1rem;
`;

export const HideBtn = styled.img`
  width: 2rem;
  margin-right: 0.1rem;
`;
