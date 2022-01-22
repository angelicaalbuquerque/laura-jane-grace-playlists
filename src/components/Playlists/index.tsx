import playlistsImg from "./../../assets/playlists.svg";
import albumInfo from "./data";

export const Playlists: React.FC<any> = () => {
  let albumData = albumInfo;

  return (
    <section className="playlistSection">
      <div className="playlistContainer">
        <header className="playlistHeader">
          <div className="playlistHeaderLeft">
            <img width="60" src={playlistsImg} alt="icon" />
            <h1 className="playlistTitle">Playlists</h1>
          </div>
        </header>

        <div>
          <h3 className="playlistSubtitle">2021</h3>
          <section className="playlistItemsSection">
            {albumData.map((albumCover, index) => {
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
          </section>
        </div>
      </div>
    </section>
  );
};
