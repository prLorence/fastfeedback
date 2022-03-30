import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { FastFeedLogo } from '@/styles/theme';
import DashboardWrapper from './DashboardWrapper';

const FreePlanEmptyState = () => (
  <DashboardWrapper>
    <Box width="100%" backgroundColor="white" borderRadius={8} p={8}>
      <Heading size="md" as="h1">
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today, then grow with us 🌱</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardWrapper>
);

export default FreePlanEmptyState;
