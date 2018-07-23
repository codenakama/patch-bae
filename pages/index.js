import Link from 'next/link';
import React from 'react';
import { BackgroundImage, Box, Card, Flex, Subhead } from 'rebass';

const Index = props => {
  return (
    <div>
      <Subhead mb={3}>Synths</Subhead>
      <Flex>
        <Box w={1 / 2} pr={3}>
          <Link href="/deepmind-12">
            <a>
              <Card width={256} p={0}>
                <BackgroundImage
                  ratio={1 / 2}
                  src="https://images.unsplash.com/photo-1523297554394-dc159677ffe1?ixlib=rb-0.3.5&s=bc1b389446b07d0729cf182f89d22587&auto=format&fit=crop&w=500&q=80"
                />
                <Subhead p={2}>Deepmind 12</Subhead>
              </Card>
            </a>
          </Link>
        </Box>
        <Box w={1 / 2}>
          <Card width={256} p={0}>
            <BackgroundImage
              ratio={1 / 2}
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
            />
            <Subhead p={2}>Hello</Subhead>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

Index.propTypes = {};

export default Index;
