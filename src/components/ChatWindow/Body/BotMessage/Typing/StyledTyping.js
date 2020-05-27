import styled from 'styled-components';

export default styled.div`
  background: ${props => (props.typingGif ? 'none ' : '#e5e5e5')};
  margin-left: ${props => (props.typingGif ? '50px' : '60px')};
`;
