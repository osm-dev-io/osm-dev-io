"use client";

import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";

export default function Shell({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Group h="100%" px={32} justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text size="lg" fw={900}>
              osm.dev.io
            </Text>
          </Group>
          <ActionIcon
            size="lg"
            variant="light"
            color="gray"
            onClick={() =>
              setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
            }
          >
            <Moon className="dark" />
            <Sun className="light" />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>네비게이션 영역</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
