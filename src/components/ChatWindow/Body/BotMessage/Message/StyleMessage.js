import styled from 'styled-components';

const hasBackground = type => type === 'image' || type === 'video';

export default styled.div`
  background: ${props =>
    hasBackground(props.value.type) ? 'none' : props.messageBackgroundBot || '#39C1DF'};
  color: ${props => props.messageColorBot || '#FFFFFF'};
  border: 1px solid
    ${props =>
      hasBackground(props.value.type) ? 'none' : props.messageBorderColorBot || '#39C1DF'};
  margin-left: ${props => (props.hasIcon ? '5px' : '60px')};
  margin-top: ${props => (props.hasIcon ? '30px' : '5px')};
  padding-left: ${props => (hasBackground(props.value.type) ? '0' : '')};

  a {
    color: ${props => props.linkColor || '#021D61'};
    text-decoration: none;
  }
  a:visited {
    color: ${props => props.linkColor || '#021D61'};
  }
  a:active {
    color: ${props => props.linkColor || '#021D61'};
  }
  a:hover {
    color: ${props => props.linkColor || '#021D61'};
    text-decoration: underline;
  }
`;
