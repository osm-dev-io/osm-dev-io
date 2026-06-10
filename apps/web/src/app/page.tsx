import { Anchor, Group, Image, Stack, Text, Title } from "@mantine/core";
import NextImage from "next/image";
import Profile from "../assets/seongminoh.jpeg";

export default function Home() {
  return (
    <Stack maw={720} mx="auto">
      <Group>
        <Image
          radius={999}
          w={72}
          h="auto"
          component={NextImage}
          src={Profile}
          alt="프로필 사진"
        ></Image>
        <Title>안녕하세요!</Title>
      </Group>
      <Text>
        저는 오성민이라고 합니다. 현재는{" "}
        <Anchor href="https://www.inflearn.com">인프랩</Anchor>에서 소프트웨어
        개발을 하고 있습니다. 동시에 성균관대학교에서 산업공학과 컴퓨터공학을
        공부하는 학생이기도 해요. 텍사스 홀덤과 스타트업에 관심이 많습니다.
      </Text>
    </Stack>
  );
}
