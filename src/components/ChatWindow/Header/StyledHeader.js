import styled from 'styled-components';

export default styled.div`
  min-height: ${props => props.headerHeight || '50px'};
  background: ${props => props.headerBackground || '#000000'};
  width: 100%;
  color: ${props => props.headerColor || '#FFFFFF'};
  position: absolute;
  top: 0;
  right: ${props => (props.isRightResize ? 'auto' : '0')};
  border: 1px solid ${props => props.headerBorderColor || 'black'};

  @media only screen and (min-width: 1024px) and (min-height: 570px) {
    width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
  }

  .sbu-header__draggable {
    &:active {
      cursor: ${props => (props.disableDraggable ? 'default' : 'grabbing')};
    }
  }
`;
