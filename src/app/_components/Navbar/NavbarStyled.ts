import Image from "next/image";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const NavbarIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 160px;
`;

export const NavbarIcons = styled(Image)`
  width: 60%;
  height: auto;
`;

export const NavbarProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  width: 160px;

  @media (max-width: 520px) {
    gap: 1rem;
  }
`;

export const NavbarProfileItems = styled(Image)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

export const NavbarItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 4rem;

  @media (max-width: 940px) {
    gap: 1.5rem;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  font-size: 22px;
  font-weight: 600;
  color: #0c0c0c;
  cursor: pointer;
  list-style-type: none;
  transition: 0.3s;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 3px;
    background-color: orange;
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 3px;
    background-color: orange;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
  }

  @media (max-width: 940px) {
    font-size: 14px;
  }
`;
