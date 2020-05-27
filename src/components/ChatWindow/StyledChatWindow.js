import styled from 'styled-components';
import logoImg from '../../../public/images/logo.svg';

export default styled.div`
  border: 1px solid ${props => props.windowBorderColor || 'none'};
  
   background: ${props => props.bodyBackground || '#F5F8FF'};
    background-image: url('${props => props.logoUrl || logoImg}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${props => props.logoSize || '250px'};

  @media only screen and (min-width: 500px) {
    width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
    height: ${props =>
      props.isFullScreen ? 'calc(var(--vh, 1vh) * 100)' : `${props.currentHeight}px`};
    position: fixed;
    bottom: ${props => (props.isFullScreen ? '0' : '20px')};
    right: ${props => (props.isFullScreen ? '0' : '20px')};
  }

  @media only screen and (min-width: 1024px) {
    .body__box {
      padding: ${props =>
        props.isFullScreen || props.currentWidth > 1024
          ? '0 calc((100% - 1024px) / 2 + 10px) 20px calc((100% - 1024px) / 2 + 10px)'
          : '0 10px 20px 10px'};
    }
  }

  @media only screen and (min-width: 500px) and (max-height: 570px) {
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-height: 570px) and (orientation: landscape) {
    .nav__change-size {
      display: none !important;
    }
  }

  @media only screen and (min-width: 1800px) {
    & {
      width: ${props => (props.isFullScreen ? '100%' : '380px')};
      height: ${props => (props.isFullScreen ? 'calc(var(--vh, 1vh) * 100)' : '670px')};
      position: fixed;
      bottom: ${props => (props.isFullScreen ? '0' : '20px')};
      right: ${props => (props.isFullScreen ? '0' : '20px')};
    }
  }
`;
