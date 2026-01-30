import {
  Container,
  Grid,
  Text,
  Box,
  Stack,
} from '@mantine/core';
import type {ReactElement} from "react";

export interface ExperienceEntryDetails {
  title: string;
  role: string;
  dates: string;
  description: ReactElement;
}

function ExperienceEntry(props: ExperienceEntryDetails) {

  const { title, role, dates, description } = props;

  return (
    <Container size="md"  py="xl">
      <Box>
        <Grid align='center'>
          <Grid.Col span={{base: 12, sm: 4}}>
            <Stack gap={0}>
              <Text size="2.5rem" fw="900">
                {title}
              </Text>
              <Text c="site-green.7" size="lg" fw={500}>
                {role}
              </Text>
              <Text size="md">
                <em>{dates}</em>
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{base: 12, sm: 8}} style={{boxSizing: "border-box"}} py={0}>
            <Box style={{borderLeft: "2.5px solid grey"}} px='sm'>
              {description}
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  )
}

export default ExperienceEntry;