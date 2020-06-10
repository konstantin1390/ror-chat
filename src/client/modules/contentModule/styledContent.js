import styled from 'styled-components';

export const Content = styled.div`
    flex: 1;
    background-color: #eceefa;
    width: 100%;
    height: 100%;
`;

export const Room = styled.div`
    display: flex;
    width: inherit;
    height: inherit;
    flex-direction: column;
`;

export const InactiveRoom = styled.div`
    display: flex;
    width: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
`;

InactiveRoom.content = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: gray;
`;