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
              <li>
                <a href="#playlists">Playlists</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#questions">6 questions</a>
              </li>
              <li>
                <ButtonVans>
                  <a
                    href="https://www.vans.com/channel-66.html"
                    target="_blank"
                  >
                    Channel 66
                  </a>
                </ButtonVans>
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
