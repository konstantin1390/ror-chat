import styled from 'styled-components';

export default styled.div`
  min-height: ${props => props.headerHeight || '50px'};
  background: ${props => props.headerBackground || '#000000'};
  color: ${props => props.headerColor || '#FFFFFF'};
  border: 1px solid ${props => props.headerBorderColor || 'black'};
`;
