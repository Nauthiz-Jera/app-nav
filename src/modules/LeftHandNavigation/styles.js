import styled, { css } from "styled-components";

const closedMenu = css`
  width: 75px;
`;

const Layout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 175px;
  height: 100vh;
  background-color: #f4f0f8;
  padding: 8px;
  ${({ isOpen }) => !isOpen && closedMenu}
`;

Layout.Button = styled.button``;

Layout.Item = styled.a``;

export default Layout;
