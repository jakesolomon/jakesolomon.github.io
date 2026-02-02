import {
  Anchor, Group, Text
} from '@mantine/core';
import Resume from "./assets/Jake-Solomon-2026-Resume.pdf";

export interface LinksGroupProps {
  color: "light" | "dark";
}

function LinksGroup(props: LinksGroupProps) {

  const { color } = props;

  return (
    <Group gap="sm">
      <Anchor
        target="_blank"
        href="https://www.linkedin.com/in/jacobcsolomon/"
        c={color === "light" ? "site-green.1" : "dark"}
        fw="bold"
      >
        LinkedIn
      </Anchor>
      <Text size="2rem" fw={100} pb="6px" c={color === "light" ? "site-green.1" : "dark"}>|</Text>
      <Anchor
        target="_blank"
        href={Resume}
        c={color === "light" ? "site-green.1" : "dark"}
        fw="bold"
      >
        Resume
      </Anchor>
      <Text size="2rem" fw={100} pb="6px" c={color === "light" ? "site-green.1" : "dark"}>|</Text>
      <Anchor
        target="_blank"
        href="https://github.com/jakesolomon/jakesolomon.github.io/blob/main/README.md"
        c={color === "light" ? "site-green.1" : "dark"}
        fw="bold"
      >
        Readme
      </Anchor>
    </Group>
  )
}

export default LinksGroup;