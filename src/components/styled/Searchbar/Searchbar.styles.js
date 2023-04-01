import styled from 'styled-components';

export const StyledSearchbar = styled.input`
  padding-left: 8px;
  width: 500px;
  height: 50px;
  display: flex;
  background-color: ${(props) => (props.theme.darkMode ? '#000' : '#fff')};
  border: 2.5px solid ${(props) => (props.theme.darkMode ? '#fff' : '#252242')};
  border-radius: 5px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => (props.theme.darkMode ? 'white' : '#302d4f')};
  &::placeholder {
    font-size: 15px;
  }
`;
