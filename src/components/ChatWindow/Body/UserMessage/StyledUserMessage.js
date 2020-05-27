import styled from 'styled-components';

export default styled.div`
  display: ${props => (props.hasIcon ? 'flex' : 'none')};
  background: ${props => props.messageIconBackground || '#021D61'};
  background: ${props => props.messageIconBackground || '#021D61'};
`;
