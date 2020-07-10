import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
const Icon = styled.div`
  font-size: 20px;
  width: 42px;
  height: 42px;
  border-radius: 2px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
`;
const Label = styled.span`
  font-size: 12px;
  text-transform: capitalize;
`;
const NavButton = props => (
  <Link href={props.path}>
    <div
      className={`NavButton ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <Icon>{props.icon}</Icon>
      <Label>{props.label}</Label>
    </div>
  </Link>
);

export default withRouter(NavButton);
