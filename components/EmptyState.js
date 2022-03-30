import React from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { FastFeedLogo } from '@/styles/theme';
import DashboardWrapper from './DashboardWrapper';

const EmptyState = () => (
  <DashboardWrapper>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      p={8}
      display="flex"
      align="center"
      justify="center"
      direction="column"
    >
      <Heading size="md" as="h1">
        You haven&apos;t created any sites yet.
      </Heading>
      <Text>Welcome 👋🏻 Let&apos;s get started. </Text>
      <Button variant="solid" size="md">
        Add Your First Site
      </Button>
    </Flex>
  </DashboardWrapper>
);

export default EmptyState;
