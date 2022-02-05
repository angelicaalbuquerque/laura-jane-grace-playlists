import React, { useState } from "react";

import playlistsIcon from "./../../assets/playlists.svg";
import {
  SectionPlaylistContainer,
  CardPlaylistContainer,
  PlaylistItems,
  ButtonLoadMore,
} from "./style";

import albumInfo from "./data";

export const Playlists: React.FC<any> = () => {
  let [loadMore2021, setLoadMore2021] = useState(false);

  const [album2021, setAlbum2021] = useState(
    albumInfo.filter((x, index) => (loadMore2021 ? x : index < 4)),
  );

  let album2022 = albumInfo.filter((x) => x.albumYear === "2022");

  let loadMoreBtn = () => {
    setLoadMore2021(true);

    let filtroAlbum2021 = albumInfo.filter((x) => x.albumYear === "2021");

    setAlbum2021(filtroAlbum2021);
  };

  return (
    <SectionPlaylistContainer>
      <div className="playlistContainer">
        <header className="playlistHeader">
          <img width="60" src={playlistsIcon} alt="icon" />
          <h1 className="playlistTitle">Playlists</h1>
        </header>

        <CardPlaylistContainer>
          <h3 className="playlistSubtitle">2021</h3>
          <PlaylistItems>
            {album2021.map((albumCover, index) => {
              return (
                <div key={index} className="playlistCard">
                  <a href={albumCover.albumUrl} target="_blank">
                    <img
                      src={albumCover.imgUrl}
                      alt={`Album art: ${albumCover.albumMonth}_${albumCover.albumYear}`}
                    />
                    <span className="playlistHoverYear">
                      {albumCover.albumMonth}
                    </span>
                  </a>
                </div>
              );
            })}
          </PlaylistItems>

          {loadMore2021 === false && (
            <ButtonLoadMore onClick={() => loadMoreBtn()}>
              load more
            </ButtonLoadMore>
          )}
        </CardPlaylistContainer>

        <CardPlaylistContainer>
          <h3 className="playlistSubtitle">2022</h3>
          <PlaylistItems>
            {album2022.map((albumCover, index) => {
              return (
                <div key={index} className="playlistCard">
                  <a href={albumCover.albumUrl} target="_blank">
                    <img
                      src={albumCover.imgUrl}
                      alt={`Album art: ${albumCover.albumMonth}_${albumCover.albumYear}`}
                    />
                    <span className="playlistHoverYear">
                      {albumCover.albumMonth}
                    </span>
                  </a>
                </div>
              );
            })}
          </PlaylistItems>
        </CardPlaylistContainer>
      </div>
    </SectionPlaylistContainer>
  );
};
