import { Fragment } from "react";
import logo from "../../assets/ynfs-logo.svg";
import {
  HeaderContainer,
  HeaderContent,
  ButtonVans,
  NextSetBar,
} from "./style";

export const Header: React.FC<any> = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="your new favorite song with Laura Jane Grace" />
          <nav>
            <ul className="linksContainer">
              <li>Playlists</li>
              <li>About</li>
              <li>6 Questions</li>
              <li>
                <ButtonVans>Channel 66</ButtonVans>
              </li>
            </ul>
          </nav>
        </HeaderContent>
      </HeaderContainer>
      <NextSetBar>
        <p>next DJ set: Feb 24th, 12pm EST</p>
      </NextSetBar>
    </Fragment>
  );
};
