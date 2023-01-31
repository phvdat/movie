/** @jsxImportSource @emotion/react */

import { NavLink } from "react-router-dom";
import { headerStyle } from "./HeaderStyle";
import Logo from "assets/icons/cat.svg";

const Header = () => {
  return (
    <header css={headerStyle.self}>
      <div css={headerStyle.wrapper}>
        <NavLink to={"/"} css={headerStyle.wrapperLogo}>
          <img src={Logo} alt="cat icon" css={headerStyle.logo} />
          <span>Pham Van Dat</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
