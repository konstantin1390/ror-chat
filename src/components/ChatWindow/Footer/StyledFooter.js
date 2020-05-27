import styled from 'styled-components';

export default styled.div`
  background: ${props => props.footerBackground || '#FFFFFF'};
  border-top: 1px solid ${props => props.footerBorderColor || '#dae1ed'};
`;
