export const Header: React.FC<any> = () => {
  return (
    <div className="headerContainer">
      <h1>Laura's Playlists</h1>
      <nav>
        <ul className="linksContainer">
          <li>About</li>
          <li>Playlists</li>
          <li>6 Questions</li>
          <li>Next Event</li>
          <li>
            <button className="buttonCTA">Channel 66</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
