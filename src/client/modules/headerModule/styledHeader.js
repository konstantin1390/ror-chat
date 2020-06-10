import styled from 'styled-components';

export default styled.div`
  min-height: 50px;
  color: ${props => props.headerColor || '#FFFFFF'};
  background: ${props => props.headerBackground || '#12171e'};
  width: 100%;
  top: 0;
  border: 1px solid ${props => props.headerBorderColor || 'black'};

  &:active {
    cursor: ${props => (props.disableDraggable ? 'default' : 'grabbing')};
  }
`;

// @media only screen and (min-width: 1024px) and (min-height: 570px) {
//   width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
// }
