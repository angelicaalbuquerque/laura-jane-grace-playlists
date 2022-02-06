export const Hero: React.FC<any> = () => {
  let videoUrl: string =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/legbLKCJ6hU?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p>
        Stream all the playlists made by Laura Jane Grace as resident DJ for
        VANS' Channel 66 and find your new favorite song!
      </p>
    </div>
  );
};
