import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';
import { FastFeedLogo } from '@/styles/theme';

const DashboardWrapper = ({ children }) => (
  <Flex flexDirection="column">
    <Flex
      backgroundColor="white"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      <Stack spacing={4} isInline justifyContent="center" alignItems="center">
        <FastFeedLogo />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.100" p={8} height="100%">
      <Flex
        flexDirection="column"
        maxWidth="800px"
        justifyContent="center"
        width="100%"
        ml="auto"
        mr="auto"
      >
        <Breadcrumb separator="/">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading mb={4}>Sites</Heading>
        {children}
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardWrapper;
