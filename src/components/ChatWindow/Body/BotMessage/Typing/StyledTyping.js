import styled from 'styled-components';

export default styled.div`
  background: ${props => (props.typingGif ? 'none ' : '#e5e5e5')};
`;
