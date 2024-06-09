import {
  NavbarContainer,
  NavbarIcons,
  NavbarIconsWrapper,
  NavbarItem,
  NavbarItems,
  NavbarProfileWrapper,
  NavbarProfileItems,
  NavbarWrapper,
} from "./NavbarStyled";
import Logo from "@/app/_assets/Logo.svg";
import Cart from "@/app/_assets/icons/Cart.svg";
import Profile from "@/app/_assets/icons/Profile.svg";
import Link from "next/link";

const NavItems = [
  { name: "Home", link: "/" },
  { name: "Men", link: "/men" },
  { name: "Cap", link: "/cap" },
  { name: "Contact", link: "/contact" },
  { name: "Shoes", link: "/shoes" },
];

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarIconsWrapper>
        <NavbarIcons src={Logo} alt="Logo" />
      </NavbarIconsWrapper>
      <NavbarWrapper>
        <NavbarItems>
          {NavItems.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <NavbarItem>{item.name}</NavbarItem>
            </Link>
          ))}
        </NavbarItems>
      </NavbarWrapper>
      <NavbarProfileWrapper>
        <NavbarProfileItems src={Cart} alt="Cart" />
        <NavbarProfileItems src={Profile} alt="Profile" />
      </NavbarProfileWrapper>
    </NavbarContainer>
  );
}
