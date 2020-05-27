import styled from 'styled-components';

export default styled.div`
  .answer__options {
    margin-left: ${props => (props.hasIcon ? '5px' : '55px')};
  }
`;
