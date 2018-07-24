import Link from 'next/link';
import React from 'react';
import {
  Absolute,
  BackgroundImage,
  Box,
  Card,
  Flex,
  Heading,
  Relative
} from 'rebass';
import styled from 'styled-components';

const Skrim = styled.div`
  background: #000;
`;

const StyledHeading = styled(Heading)`
  background-color: #d84263;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  color: #fff;
`;

const Index = props => {
  return (
    <div>
      <Heading fontSize={6} mb={4} color="#18A1A6">
        Synths
      </Heading>

      <Flex>
        <Box w={1 / 2} pr={3}>
          <Link href="/deepmind-12">
            <a>
              <Relative>
                <Card width={256} p={0}>
                  <BackgroundImage
                    bg="#D84263"
                    ratio={1 / 2}
                    src="https://images.unsplash.com/photo-1523297554394-dc159677ffe1?ixlib=rb-0.3.5&s=bc1b389446b07d0729cf182f89d22587&auto=format&fit=crop&w=500&q=80"
                  />
                </Card>
                <Absolute
                  bottom={0}
                  left={0}
                  style={{ borderRadius: '4px', overflow: 'hidden' }}
                >
                  <StyledHeading p={2}>Deepmind 12</StyledHeading>
                </Absolute>
              </Relative>
            </a>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

Index.propTypes = {};

export default Index;
