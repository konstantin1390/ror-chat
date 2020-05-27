import styled from 'styled-components';

export default styled.iframe`
  @media only screen and (min-width: 700px) {
    width: ${props => (props.isFullScreen ? '600px' : '100%')};
    height: ${props => (props.isFullScreen ? '400px' : '100%')};
  }
  @media only screen and (min-width: 420px) and (max-width: 700px) {
    width: ${props => (props.isFullScreen ? '340px' : '100%')};
    height: ${props => (props.isFullScreen ? '250px' : '100%')};
  }
  width: 100%;
  height: 100%;
`;
