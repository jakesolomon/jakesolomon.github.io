import {useEffect, useState} from 'react';
import {
  AppShell,
  Avatar,
  Container,
  Anchor,
  Grid,
  Text,
  Mark,
  Box,
  Stack,
  Image,
  Flex,
  Center,
  Transition,
  useMantineTheme,
} from '@mantine/core';
import {useScrollIntoView} from '@mantine/hooks';

import Me from "./assets/me.png";
import ExperienceSection from "./ExperienceSection.tsx";
import LinksGroup from "./LinksGroup.tsx";

function App() {

  const theme = useMantineTheme();

  const { scrollIntoView: scrollToExperience, targetRef: experienceRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
    duration: 1200
  });

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpened(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppShell>
      <AppShell.Main>

        {/* Hero Section */}
        <Box bg={theme.colors.gray[1]}>
          <Container size="lg">

            {/* Desktop View */}
            <Grid gutter="xl" visibleFrom="md">
              <Grid.Col span={{base: 12, md: 6}}>
                <Box pt="20vh">
                  <Text size="3.5rem" lh={1.15} fw={700} pb={0}>I'm Jake,</Text>
                  <Text size="3.5rem" lh={1.15} fw={300} pt={0}>
                    <Mark color="site-green.2">a React/TypeScript Engineer</Mark>{' '}
                    with <em>full-stack experience.</em>
                  </Text>
                  <Box pt="lg">
                    <LinksGroup color="dark"/>
                  </Box>
                  <Box w="100%" pt="lg">
                    <Transition
                      mounted={opened}
                      transition="fade-up"
                      duration={400}
                      timingFunction="ease"
                    >
                      {(styles) =>
                        <div style={styles}>
                          <Anchor href="#experience" c="dark" onClick={() => {
                            scrollToExperience()
                          }}>
                            Projects ↓
                          </Anchor>
                        </div>
                      }
                    </Transition>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col span={{base: 12, md: 6}} mb={0} pb={0}>
                <Image src={Me} w="500px" h="650px" style={{position: "absolute", right: 0}}/>
                {/*Spacing for absolutely positioned image*/}
                <Box h="650px"/>
              </Grid.Col>
            </Grid>

            {/* Mobile View */}
            <Center hiddenFrom="md" >
              <Flex direction="column" maw="700px" mx="md" py='xl'>
                <Box h="15vh" />
                <Avatar src={Me} alt="it's me" size="xl" mb="xl" />
                <Text size="2.5rem" lh={1.15} pt={0}>
                  <b>I'm Jake, </b>
                  <Mark color="site-green.2">a React/TypeScript Engineer</Mark>{' '}
                  with <em>full-stack experience.</em>
                </Text>
                <Box pt="lg">
                  <LinksGroup color="dark"/>
                </Box>
                <Box h="15vh" />
              </Flex>
            </Center>

          </Container>
        </Box>

        <Box h="70px"/>

        {/* Experience Header */}
        <Container size="lg" ref={experienceRef} mb="lg">
          <Box py="xl" bg="site-green.9" w="50vw" style={{position: "absolute", left: 0, zIndex: -1}}>
            <Text size="5rem" c="site-green.2">
              {'\u200B'}
            </Text>
          </Box>
          <Stack bg="site-green.9" py="xl">
            <Text size="3rem" fw="900"  c="site-green.2">
              Experience
            </Text>
            <Text size="1rem" fw="700" c="site-green.2">
              <em>2020-Present</em>
              {/*Alternatively:*/}
              {/*<em>Full-time and freelance work</em>*/}
            </Text>
          </Stack>
        </Container>

        <ExperienceSection/>

        <Box h="30px"/>

        {/* Footer */}
        <Box w="100vw" bg="site-green.9" ta="center">
          <Container size="md" py="lg">
            <Center>
              <LinksGroup color="light"/>
            </Center>
          </Container>
        </Box>

      </AppShell.Main>
    </AppShell>
  );
}

export default App;
