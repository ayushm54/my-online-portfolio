import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "../../logo_main.svg";

export const Nav = styled.nav`
  background: rgba(10, 25, 47, 0.85);
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
export const NavLogo = styled.div`
  cursor: pointer;
  background-image: url(${mainLogo});
  height: 60px;
  width: 60px;
  margin-left: 10px;
`;

export const NavLink = styled(Link)`
  color: #f2f2f2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 17px;
  &.active {
    color: #e85a4f;
  }
  &:hover {
    color: #e85a4f;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 0.5rem;
  background: transparent;
  padding: 10px 22px;
  color: #e85a4f;
  outline: none;
  border: 1.5px solid #e85a4f;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  font-size: 17px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #808080;
    color: #ffffff;
  }
`;
