import Link from 'next/link';
import React from 'react';
import { BlockLink, Container, Flex, NavLink, Provider, Toolbar } from 'rebass';
import styled from '../../node_modules/styled-components';
import FeedbackArea from '../FeedbackArea';

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
        <NavLink ml="auto" fontWeight="normal">
          <FeedbackArea postToUrl="https://hooks.zapier.com/hooks/catch/3591897/g1funh/" />
        </NavLink>
      </Toolbar>
      <Container maxWidth={1024} mt={3} pt={64}>
        {children}
        <footer>
          <Flex justify="flex-end" mt={128} mb={6}>
            <BlockLink href="https://itsricardo.com" target="_blank">
              by Codenakama
            </BlockLink>
          </Flex>
        </footer>
      </Container>
    </Provider>
  );
};

Layout.propTypes = {};

export default Layout;
