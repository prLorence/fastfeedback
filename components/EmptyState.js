import React from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { FastFeedLogo } from '@/styles/theme';
import DashboardWrapper from './DashboardWrapper';
import AddSiteModal from '@/components/AddSiteModal';

const EmptyState = () => (
  <DashboardWrapper>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      p={16}
      display="flex"
      align="center"
      justify="center"
      direction="column"
    >
      <Heading size="lg" as="h1" mb={2}>
        You haven&apos;t created any sites yet.
      </Heading>
      <Text mb={4}>Welcome 👋🏻 Let&apos;s get started. </Text>
      <AddSiteModal />
    </Flex>
  </DashboardWrapper>
);

export default EmptyState;
