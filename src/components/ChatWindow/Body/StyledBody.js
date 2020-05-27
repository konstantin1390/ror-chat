import styled from 'styled-components';

const calcBodyHeight = (footerHeight, headerHeight = 50) => `${footerHeight + 44 + headerHeight}px`;

export default styled.div`
  height: calc(
    100% - ${props => props.headerHeight || calcBodyHeight(props.inputHeight, props.headerHeight)}
  );

  .ScrollbarsCustom-Track {
    background: ${props => props.scrollBackground || '#efefef'} !important ;
    width: ${props => props.scrollWidth || '6px'} !important;
    border-radius: 5px !important;
  }

  .ScrollbarsCustom-Thumb {
    transition: 0.1s !important;
    background: ${props => props.scrollThumbBackground || '#b5b7bd'} !important;
  }
`;
