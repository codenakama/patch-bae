import Link from 'next/link';
import React from 'react';
import { Container, NavLink, Provider, Toolbar } from 'rebass';
import styled from '../../node_modules/styled-components';

const Logo = styled.img`
  width: 64px;
`;

const Layout = ({ children, ...props }) => {
  return (
    <Provider>
      <Toolbar bg="#fff" color="black">
        <Link href="/">
          <NavLink>
            <Logo src="/static/images/logo_patch_bae.svg" />
          </NavLink>
        </Link>
        <Link href="/lessons">
          <NavLink ml="auto" fontWeight="normal">
            lessons
          </NavLink>
        </Link>

        <NavLink fontWeight="normal">login</NavLink>
        <NavLink>signup</NavLink>
      </Toolbar>
      <Container maxWidth={1024} mt={3} pt={64}>
        {children}
      </Container>
    </Provider>
  );
};

Layout.propTypes = {};

export default Layout;
