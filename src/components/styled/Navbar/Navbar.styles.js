import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 5px 25px 5px 15px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.darkMode ? 'rgb(19 37 59 / 84%)' : 'rgb(11 62 123)'};
  height: 85px;
`;
