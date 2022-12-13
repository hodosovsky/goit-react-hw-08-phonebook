import styled from 'styled-components';

const UserMenuStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-right: 10px;

  & button {
    cursor: pointer;
    display: block;
    height: 60%;
    border-radius: 10px;
  }
`;

export { UserMenuStyled };
