import styled from 'styled-components';

export default styled.div`
  background: ${props => props.footerBackground || '#FFFFFF'};
  button,
  textarea {
    background: ${props => props.footerBackground || '#FFFFFF'};
  }
`;
