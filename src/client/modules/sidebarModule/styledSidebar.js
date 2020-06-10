import styled from 'styled-components';

export const Sidebar = styled.div`
  background-color: #202933;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 245px;
  max-width: 300px;
`;

Sidebar.header = styled.div`
  display: flex;
  margin: 1px 0;
  padding: 10px 20px 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
  height: 35px;
  padding-left: 5px;
`;

Search.input = styled.input`
  display: flex;
  flex: 1;
  padding-left: 5px;
  border-radius: 5px;
  background: white;
  color: var(--clr-dark);
  outline: none;
  border: none;
`;

//background: var(--clr-dark);
