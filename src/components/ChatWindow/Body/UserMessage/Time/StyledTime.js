import styled from 'styled-components';

export default styled.p`
  color: ${props => props.messageBackground || '#021d61'};
  margin-left: auto;
  text-align: end;
  border-radius: 10px;
  font-size: 12px;
  margin: 3px 15px 0 auto;
`;
