import styled from 'styled-components';

export default styled.span`
  background: ${props => props.messageBackground || '#021D61'};
  color: ${props => props.messageColor || 'white'};
  margin-right: ${props => (props.hasIcon ? '5px' : '60px')};
  margin-top: ${props => (props.hasIcon ? '0' : '5px')};
  border: 1px solid ${props => props.messageBorderColor || 'none'};
`;
