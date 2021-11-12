export const Playlists: React.FC<any> = () => {
  let albumArt = [
    "Jan",
    "Fev",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let albumInfo = [
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=306ad880f85f4577&nd=1",
    },
  ];

  return (
    <div>
      <header className="headerPlaylist">
        <div className="headerPlaylistLeft">
          <img
            width="50"
            src="https://cdn-icons.flaticon.com/png/512/2723/premium/2723186.png?token=exp=1636679426~hmac=986e1948bfd7280d6ec074da75b3d56f"
            alt="icon"
          />
          <h1>Playlists</h1>
        </div>
        <span>Ano</span>
      </header>

      <section className="playlistContainer">
        {albumInfo.map((albumCover, index) => {
          return (
            <div key={index} className="playlistCard">
              <a href={albumCover.albumUrl} target="_blank">
                <img src={albumCover.imgUrl} alt="" className="emidio" />
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};
