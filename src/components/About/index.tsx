import aboutIcon from "./../../assets/about.svg";

export const About: React.FC<any> = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutInfoContainer">
        <img width="60" src={aboutIcon} alt="icon" />
        <h1 className="aboutTitle">About</h1>

        <p className="aboutText">
          Since February 2021, Laura Jane Grace (Against Me!) has been resident
          DJ for VANS' Channel 66. Live from Chicago, monthly, Laura plays no
          less than 2 hours of music, with a essential rule: nothing pre-2020,
          only new music, to support artists who have been struggling since the
          beginning of the pandemic to promote their new work without touring.
        </p>

        <p className="aboutText">
          Here you can listen to all the playlists shared by Laura, who will
          make sure you find your new favorite song!
        </p>
      </div>

      <div className="imageContainer">
        <div className="rectanglePhoto"></div>

        <img src="src\assets\ljg-vans66-photo-by-daniel-boczarski.jpg" />
      </div>
    </div>
  );
};
