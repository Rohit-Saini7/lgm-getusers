import React from "react";
import styled from "styled-components";

function Navbar({ handleClick, isLoading }) {
  return (
    <Container>
      <NavbarWrap className="navbarWrap">
        <Toolbar>
          <LogoBox>Get Users App</LogoBox>
          <GetUsers onClick={handleClick} disabled={isLoading}>
            Get Users
          </GetUsers>
        </Toolbar>
      </NavbarWrap>
    </Container>
  );
}
export default Navbar;

const Container = styled.header`
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  position: absolute;
  top: 3%;
  left: 10%;
  border-radius: 10px;
`;

const NavbarWrap = styled.div`
  max-width: 80%;
  margin: auto;
  box-sizing: border-box;
`;
const Toolbar = styled.div`
  min-height: 64px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const LogoBox = styled.div`
  font-weight: 800;
  font-size: 2rem;
`;

const GetUsers = styled.button`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  /* outline: 0; */
  border: solid 1px #fff;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.02857em;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-top: 16px;
  margin-bottom: 16px;
  color: white;
  display: block;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "allowed")};
  margin-left: auto;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: gray;
  }
`;
