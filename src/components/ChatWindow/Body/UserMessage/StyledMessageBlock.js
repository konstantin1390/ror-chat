import styled from 'styled-components';

export default styled.div`
  margin-right: ${props => (!props.hasIcon ? '60px' : '5px')};
`;
