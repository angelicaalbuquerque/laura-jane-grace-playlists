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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          pariatur magnam itaque sit nihil asperiores in numquam, suscipit
          doloribus magni illum ducimus temporibus, delectus saepe libero
          laboriosam corrupti harum reiciendis.
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
