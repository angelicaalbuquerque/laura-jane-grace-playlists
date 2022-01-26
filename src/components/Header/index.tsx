export const Header: React.FC<any> = () => {
  return (
    <div className="headerContainer">
      <h1>Laura's Playlists</h1>
      <nav>
        <ul className="linksContainer">
          <li>Playlists</li>
          <li>About</li>
          <li>6 Questions</li>
          <li>
            <button className="buttonCTA">Channel 66</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
