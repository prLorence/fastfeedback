// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import {
  Flex,
  Box,
  Button,
  Heading,
  ButtonGroup,
  Text,
  Code
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { theme, FastFeedLogo, GithubLogo, GoogleLogo } from '@/styles/theme';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <title> Fast Feedback </title>

      <FastFeedLogo boxSize="64px" />
      {/* <Text>
        Current User:
        <Code>{auth.user ? auth.user.email : 'None'}</Code>
      </Text> */}

      <ButtonGroup>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}> Sign out </Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
            Sign in
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
}
