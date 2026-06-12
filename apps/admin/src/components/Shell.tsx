"use client";

import { AppShell, Burger, Group, NavLink, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Shell({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding={{ base: 16, sm: 32 }}
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Group h="100%" px={{ base: 16, sm: 32 }} justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text component={Link} href="/" size="lg" fw={900} c="inherit">
              osm.dev.io 어드민
            </Text>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p={{ base: 16, sm: 32 }}>
        <NavLink
          component={Link}
          href="/posts"
          label="게시글 관리"
          rightSection={<ChevronRight size={16} />}
        />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
