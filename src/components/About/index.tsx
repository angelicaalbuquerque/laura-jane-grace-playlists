export const About: React.FC<any> = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutInfoContainer">
        <img
          width="50"
          src="https://cdn-icons.flaticon.com/png/512/2723/premium/2723186.png?token=exp=1636679426~hmac=986e1948bfd7280d6ec074da75b3d56f"
          alt="icon"
        />
        <h1 className="aboutTitle">
          Your New Favorite Song
          <span className="aboutSubtitle"> with Laura Jane Grace</span>
        </h1>

        <p className="aboutText">
          Since February 2021, Laura Jane Grace (Against Me!) has been resident
          DJ for VANS' Channel 66. Live from Chicago, monthly, Laura plays no
          less than 2 hours of music, with a essential rule: nothing pre-2020,
          only new music, to support artists who have been struggling since the
          beginning of the pandemic to promote their new work without touring.
          Here you can listen to all the playlists shared by Laura, who will
          make sure you find your new favorite song!
        </p>

        <p className="aboutText">Lorem!!</p>
      </div>

      <div className="imageContainer">
        <div className="rectanglePhoto"></div>

        <img src="src\assets\ljg-vans66-photo-by-daniel-boczarski.jpg" />
      </div>
    </div>
  );
};
