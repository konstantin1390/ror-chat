import styled from 'styled-components';

const hasBackground = type => type === 'image' || type === 'video';

export default styled.p`
  position: absolute;
  box-sizing: border-box;
  margin-top: 12px;
  background: ${props =>
    !hasBackground(props.value.type) ? 'none' : props.messageBackgroundBot || '#39C1DF'};
  border: 1px solid
    ${props =>
      !hasBackground(props.value.type) ? 'none' : props.messageBorderColorBot || '#39C1DF'};
  color: ${props => props.messageBackgroundBot || '#39C1DF'};
  padding: ${props => (!hasBackground(props.value.type) ? 'none' : '3px')};
  text-align: start;
  border-radius: 10px;
  margin-left: 15px;
  font-size: 12px;
`;
