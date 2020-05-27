import styled from 'styled-components';

export default styled.div`
  background: ${props => props.footerBackground || '#FFFFFF'};
  border-top: 1px solid ${props => props.footerBorderColor || '#dae1ed'};
  @media only screen and (min-width: 900px) and (min-height: 570px) {
    width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
    right: ${props => (props.isRightResize ? 'auto' : '0')};
  }
`;
