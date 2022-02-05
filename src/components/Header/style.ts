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

  .linksContainer {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

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

export const ButtonVans = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #1e2b25;
  background-color: #35ac79;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: #ffffff;
  }
`;

export const NextSetBar = styled.div`
  background-color: #242426;
  border-top: 0.5px solid #363636;
  border-bottom: 0.5px solid #363636;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 5px 0;
`;
