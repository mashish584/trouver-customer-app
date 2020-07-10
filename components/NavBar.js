// components/NavBar.js

import NavButton from "./NavButton";
import styled from "styled-components";
import { Input } from "antd";
const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 5px 0;
  background: var(--primary);
  font-family: var(--core-font);
  box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);
  a {
    color: inherit;
    text-decoration: none;
  }
  .active {
    color: var(--highlight);
  }
`;
const Image = styled.img`
  display: block;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;
const NavBar = props => (
  <NavBarDiv>
    <Image src="/Trouver-logo.png" />
    <Input
      placeholder="Hello, Search your favourite beverage !"
      style={{ width: "50%" }}
    />
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </NavBarDiv>
);

export default NavBar;