import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  display: block;
  cursor: pointer;

  background-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  color: #35ac79;
  padding: 10px;
  margin: 20px auto 0;
  border: none;
  border-radius: 8px;
  transition: 0.3s;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: currentColor;
  }

  &:hover {
    color: #ffffff;
  }
`;

export const SectionPlaylistContainer = styled.section`
  background-color: #222222;
  color: #e9e9e9;

  .playlistContainer {
    max-width: 1200px;
    padding: 120px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    position: relative;
  }

  .playlistHeader {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .playlistTitle {
    font-size: 3rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: "Roboto", sans-serif;
  }

  .playlistSubtitle {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: "Poppins", sans-serif;
  }
`;

export const PlaylistItems = styled.section`
  background-color: #222222;
  color: #f3f3f3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardPlaylistContainer = styled.div`
  .playlistCard {
    position: relative;
  }

  .playlistCard:hover img {
    filter: brightness(30%);
    transition: 0.3s;
  }

  .playlistCard a span {
    color: white;
  }

  .playlistHoverYear {
    display: none;
  }

  .playlistCard:hover .playlistHoverYear {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: bold;
  }

  .playlistCard a img {
    max-width: 100%;
    max-height: 100%;
  }
`;
