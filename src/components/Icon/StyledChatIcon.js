import styled from 'styled-components';

export default styled.div`
  bottom: ${props => props.bottomPosition || 95}px};
  right: ${props => props.horizontalPosition || 20}px;
`;
