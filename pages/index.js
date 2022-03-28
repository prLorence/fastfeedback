// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { Button, Heading, ButtonGroup, Text, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { theme } from '@/styles/theme';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <title> Fast Feedback </title>
      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current User:
          <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        <ButtonGroup>
          <Button onClick={(e) => auth.signinWithGithub()}> Sign in </Button>
          {auth.user && (
            <Button onClick={(e) => auth.signout()}> Sign out </Button>
          )}
        </ButtonGroup>
      </main>
    </div>
  );
}
