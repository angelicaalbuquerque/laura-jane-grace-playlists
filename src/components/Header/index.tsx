import logo from "../../assets/ynfs-logo.svg";
import { HeaderContainer, HeaderContent } from "./style";

export const Header: React.FC<any> = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="your new favorite song with Laura Jane Grace" />
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
      </HeaderContent>
    </HeaderContainer>
  );
};
