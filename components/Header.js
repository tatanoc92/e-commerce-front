import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import BarsIcon from "./icons/BarsIcon";

const StyledHeader = styled.header`
  background-color: #222;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
display: block;
`
      : `display: none;`}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  padding: 10px 0px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Wrapper>
        <Logo href={"/"}>Ecommerce</Logo>
        <StyledNav mobileNavActive={mobileNavActive}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/products"}>All products</NavLink>
          <NavLink href={"/categories"}>Categories</NavLink>
          <NavLink href={"/account"}>Account</NavLink>
          <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
        </StyledNav>
        <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
          <BarsIcon />
        </NavButton>
      </Wrapper>
    </StyledHeader>
  );
}
