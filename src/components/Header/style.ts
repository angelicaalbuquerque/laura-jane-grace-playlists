import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #121214;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    height: 160px;
  }
`;

export const HeaderContent = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .linksContainer {
      margin-top: 20px;
    }
  }
`;
