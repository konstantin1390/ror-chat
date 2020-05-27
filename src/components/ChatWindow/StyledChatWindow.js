import styled from 'styled-components';
import { logoImg } from '../../constants';

export default styled.div`
  border: 1px solid ${props => props.windowBorderColor || 'none'};
  
  background: ${props => props.bodyBackground || '#F5F8FF'};
  background-image: url('${props => props.logoUrl || logoImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => props.logoSize || '250px'};
  
  .sbu-Resizable{
   width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)}!important;
   height: ${props =>
     props.isFullScreen ? 'calc(var(--vh, 1vh) * 100)' : `${props.currentHeight}px`}!important;
  }
  
  @media only screen and (min-width: 500px) {
    width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
    height: ${props =>
      props.isFullScreen ? 'calc(var(--vh, 1vh) * 100)' : `${props.currentHeight}px`};
    position: fixed;
    bottom: ${props =>
      props.isFullScreen
        ? '0'
        : props.isRightResize || props.isLeftBottomResize
        ? 'auto'
        : `${props.currentPosition.bottom}px`};
    right: ${props =>
      props.isFullScreen
        ? '0'
        : props.isRightResize || props.isRightTopResize
        ? 'auto'
        : `${props.currentPosition.right}px`};
    top: ${props =>
      props.isRightResize || props.isLeftBottomResize ? `${props.currentPosition.top}px` : 'auto'};
    left: ${props =>
      props.isRightResize || props.isRightTopResize ? `${props.currentPosition.left}px` : 'auto'};
  }
  
  @media only screen and (min-width: 1024px) {
    .sbu-body__box {
      padding: ${props =>
        props.isFullScreen || props.currentWidth > 1024
          ? '0 calc((100% - 1024px) / 2 + 10px) 20px calc((100% - 1024px) / 2 + 10px)'
          : '0 10px 20px 10px'};
    }
  }

  @media only screen and (max-width: 900px) and (max-height: 570px) and (orientation: landscape) {
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-height: 570px) and (orientation: landscape) {
    .sbu-nav__change-size {
      display: none !important;
    }
  }

  @media only screen and (max-height: 500px) and (orientation: landscape) {
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    top: 0;
    right: 0;
  }

  @media only screen and (min-width: 1800px) {
    & {
      width: ${props => (props.isFullScreen ? '100%' : `${props.currentWidth}px`)};
      height: ${props =>
        props.isFullScreen ? 'calc(var(--vh, 1vh) * 100)' : `${props.currentHeight}px`};
      position: fixed;
      bottom: ${props =>
        props.isFullScreen
          ? '0'
          : props.isRightResize || props.isLeftBottomResize
          ? 'auto'
          : `${props.currentPosition.bottom}px`};
    right: ${props =>
      props.isFullScreen
        ? '0'
        : props.isRightResize || props.isRightTopResize
        ? 'auto'
        : `${props.currentPosition.right}px`};
      top: ${props =>
        props.isRightResize || props.isLeftBottomResize
          ? `${props.currentPosition.top}px`
          : 'auto'};
      left: ${props =>
        props.isRightResize || props.isRightTopResize ? `${props.currentPosition.left}px` : 'auto'};
    }
  }
`;
