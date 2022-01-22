import playlistsImg from "./../../assets/playlists.svg";

export const Playlists: React.FC<any> = () => {
  let albumInfo = [
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b27370b80c7233999a55b7eaf28aab67616d0000b2738d023c21d4fd574d1cce3eedab67616d0000b273adbb76d485b962581a27608cab67616d0000b273c591a8be67b62940c345fda3",
      albumUrl:
        "https://open.spotify.com/playlist/6BI0sks00XarxxGasiykAH?si=b8f24da276ad45ee",
      albumMonth: "February",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b27339e56e4a1835365203656c13ab67616d0000b27357739374ae93df6567eb1a06ab67616d0000b273ae50174ae182d63ed76bcb8eab67616d0000b273b27078a2f44f1b43fc0182a8",
      albumUrl:
        "https://open.spotify.com/playlist/1DOHVO3PbyBzkkr9H8zLqM?si=f4fc12796c6e4a31&nd=1",
      albumMonth: "March",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2734223c63d4fb87a5508891594ab67616d0000b27374b6bcb1d3be3bc5ce5a5d30ab67616d0000b2739719fdd03651cdc1a5c3af08ab67616d0000b273ac30cdd41a53e3297b3e0eb4",
      albumUrl:
        "https://open.spotify.com/playlist/37xRQgwOkVhWEox3uYST3W?si=efb0cc8c58eb48d2",
      albumMonth: "April",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2731062ec876a7d213f959c439dab67616d0000b27325897799833ef9554f75d22bab67616d0000b2738362ef1cbbeb15c30f4bd97dab67616d0000b273b103a69ed742a7735a2ba7e8",
      albumUrl:
        "https://open.spotify.com/playlist/5k4e4n0xB6o6JsqdHXua6y?si=5869a09a84584b7a",
      albumMonth: "June",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b27326b295851c67df0700ce405fab67616d0000b2734c3dcc81121673d608a65bcdab67616d0000b2738db54a0818391d86cd5cb5ddab67616d0000b273bd4140f78e9e12ca95947bd3",
      albumUrl:
        "https://open.spotify.com/playlist/0mTZP3tgwRx8Lo75rSttSq?si=28e8be4a22284491",
      albumMonth: "July",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2733af376429770e3e5a0d986ffab67616d0000b2734d21c482cca65bb4088965faab67616d0000b273971009486fcd510ae6c79fa7ab67616d0000b273af96673d1b1ad03f1135b366",
      albumUrl:
        "https://open.spotify.com/playlist/4Yc8vn83ldmQLJkLTJ7blx?si=742d95cf5a5142ac",
      albumMonth: "August",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b27340e1a841d268bee6558ca39fab67616d0000b2736b5c957b7f59d36d4bb82741ab67616d0000b273ab3496c8a3c8702e99fed22bab67616d0000b273e7820f2da6c60831d0ba7b26",
      albumUrl:
        "https://open.spotify.com/playlist/7MR5xaFolVwY7gACV9u1MI?si=9cbad60440d348d6",
      albumMonth: "October",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2730946bc4ad2193d87f5b13118ab67616d0000b2731214db467fb7990e34117003ab67616d0000b2733329969a5da615a27e356cccab67616d0000b273a66bf6d5ce31ce1a239fa084",
      albumUrl:
        "https://open.spotify.com/playlist/1ogE043mxRj1dPFKUSq6Qg?si=9b7474dfbd604517",
      albumMonth: "November",
      albumYear: "2021",
    },
    {
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d0000b2732bd3e6d8ebe22e23de234c6cab67616d0000b27368c4243d35320800c235ee25ab67616d0000b2738b636aee75e687d17e6ac552ab67616d0000b273970beceb3a2853cc17f943c6",
      albumUrl:
        "https://open.spotify.com/playlist/2PZJdkK02cescDq8JloSPq?si=9d799c7bb8cb47f9",
      albumMonth: "December",
      albumYear: "2021",
    },
  ];

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
            {albumInfo.map((albumCover, index) => {
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
