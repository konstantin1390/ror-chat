import styled from 'styled-components';

export default styled.div`
  background: ${props => props.fieldBackground || '#FFFFFF'};
  color: ${props => props.fieldColor || '#000000'};
  border: 1px solid ${props => props.fieldBorderColor || '#39C1DF'};
`;
