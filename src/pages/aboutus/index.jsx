/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  Flex,
  Image,
  RingProgress,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import aboutUs from "../../assets/aboutUs.png";
import t1 from "../../assets/t1.svg";
import t2 from "../../assets/t2.svg";
import t3 from "../../assets/t3.svg";
import t4 from "../../assets/t4.svg";
import t5 from "../../assets/t5.svg";
import osam from "../../assets/osama.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";

const AboutUs = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 1290px)");
  const isMobile2 = useMediaQuery("(max-width: 900px)");
  const { classes } = useStyles();
  const [people, setPeople] = useState([
    { name: "Muhammad Usama", role: "Web Developer", img: osam },
    { name: "Muhammad Usama", role: "Web Developer", img: osam },
    { name: "Muhammad Usama", role: "Web Developer", img: osam },
    { name: "Muhammad Usama", role: "Web Developer", img: osam },
    { name: "Muhammad Usama", role: "Web Developer", img: osam },
    { name: "Muhammad Usama", role: "Web Developer", img: osam },
  ]);

  useEffect(() => {
    axios
      .get(backendUrl + "/team-member/get_all")
      .then((res) => setPeople(res.data.data));
  }, []);

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
      >
        <Title>ABOUT USQUARE SOLUTIONS</Title>
        <Title order={3}>We are providing Solutions for your Business</Title>
      </Box>
      <Stack spacing={"xl"} className={classes.content}>
        <Title color={theme.colors.blue} fw={400}>
          WHO WE ARE
        </Title>
        <Title order={3} fw={300}>
          We are the Fastest Growing IT Company
        </Title>
        <Text>
          Usquare Solutions is the leading digital platform for all business
          firms across the world and an one stop automated solution for your
          trade and industry. No more and no less. We work with you to develop
          the solutions that you need and that will carry you into the digital
          future. Individual and tailor-made. Depending on the size and field of
          your organization, we have different products and services to meet
          your requirements. We provide the optimum and customized solutions
          made for your organization.
        </Text>
      </Stack>
      <Stack spacing={"xl"} className={classes.content}>
        <Title color={theme.colors.blue} fw={400}>
          OUR MISSION
        </Title>
        <Title order={3} fw={300}>
          Providing Reliable Software to you
        </Title>
        <Text>
          Our mission is to make our customer’s dreams come true by providing
          whatever services it requires. We ensure to deliver bug-free, turn-key
          technology solutions to our clients with outstanding infrastructure,
          design and development.
        </Text>
      </Stack>
      <Flex
        className={classes.tech}
        gap={"100px"}
        wrap={!isMobile ? "wrap" : "nowrap"}
      >
        {!isMobile2 && (
          <SimpleGrid cols={3} align={"center"} m="auto">
            <RingProgress
              sections={[{ value: 90, color: "green" }]}
              size={"160"}
              thickness={5}
              styles={{
                label: {
                  width: "50%",
                  margin: "auto",
                  position: "absolute",
                  top: 80,
                },
              }}
              label={
                <Center>
                  <Stack align="center" spacing={"xs"}>
                    <Image src={t1} fit="fill" width={"25px"} />
                    <Text fz="xs" align="center">
                      MOBILE APP DEVELOPMENT
                    </Text>
                  </Stack>
                </Center>
              }
            />
            <RingProgress
              sections={[{ value: 100, color: "orange" }]}
              size={"160"}
              thickness={5}
              styles={{
                root: { marginTop: "-70px" },
                label: {
                  width: "50%",
                  margin: "auto",
                  position: "absolute",
                  top: 80,
                },
              }}
              label={
                <Center>
                  <Stack align="center" spacing={"xs"}>
                    <Image src={t2} fit="fill" width={"25px"} />
                    <Text fz="xs" align="center">
                      WEB DEVELOPMENT
                    </Text>
                  </Stack>
                </Center>
              }
            />
            <RingProgress
              sections={[{ value: 80, color: "red" }]}
              size={"160"}
              thickness={5}
              styles={{
                label: {
                  width: "50%",
                  margin: "auto",
                  position: "absolute",
                  top: 80,
                },
              }}
              label={
                <Center>
                  <Stack align="center" spacing={"xs"}>
                    <Image src={t3} fit="fill" width={"25px"} />
                    <Text fz="xs" align="center">
                      AR/VR GAMES
                    </Text>
                  </Stack>
                </Center>
              }
            />
            <RingProgress
              sections={[{ value: 80, color: "purple" }]}
              size={"160"}
              thickness={5}
              styles={{
                label: {
                  width: "50%",
                  margin: "auto",
                  position: "absolute",
                  top: 80,
                },
              }}
              label={
                <Center>
                  <Stack align="center" spacing={"xs"}>
                    <Image src={t4} fit="fill" width={"25px"} />
                    <Text fz="xs" align="center">
                      UI/UX DESIGN
                    </Text>
                  </Stack>
                </Center>
              }
            />
            <Text
              fz="22px"
              align="center"
              className={classes.core}
              style={{ marginTop: "-70px" }}
            >
              CORE EXPERTISE
            </Text>
            <RingProgress
              sections={[{ value: 60, color: "teal" }]}
              size={"160"}
              thickness={5}
              styles={{
                label: {
                  width: "50%",
                  margin: "auto",
                  position: "absolute",
                  top: 80,
                },
              }}
              label={
                <Center>
                  <Stack align="center" spacing={"xs"}>
                    <Image src={t5} fit="fill" width={"25px"} />
                    <Text fz="xs" align="center">
                      DIGITAL MARKETING
                    </Text>
                  </Stack>
                </Center>
              }
            />
          </SimpleGrid>
        )}
        <Stack spacing={"xl"} align="flex-end" w={!isMobile ? "100%" : "40%"}>
          <Title color={theme.colors.blue} fw={400} order={2}>
            TECHNOLOGY EXCELLENCE
          </Title>
          <Title order={3} fw={300}>
            Let's Check out our Services
          </Title>
          <Text align="right">
            Usquare solutions is recognized for customized, quality and cost
            effective software solutions. We build technology-rich apps and
            solutions that provide the best user experience. We always use the
            latest technologies and methodologies to build the products, and we
            provide extensive support to our clients in the areas of design,
            development, and marketing.
          </Text>
        </Stack>
      </Flex>

      <Stack spacing="xl" className={classes.content} p="xl">
        <Title align="center" color={theme.colors.blue[6]} fw={400}>
          OUR PEOPLE
        </Title>
        <Title order={3} align="center" fw={300}>
          Meet with our Team Members
        </Title>
        <Flex
          wrap="wrap"
          gap="sm"
          m="auto"
          justify="center"
          rowGap="40px"
          style={{ maxWidth: '1200px' }} // Set a max width for better layout
        >
          {people.map((member) => (
            <Stack key={member._id} w="calc(25% - 10px)" spacing="sm" align="center"> {/* Adjusted width for 4 items per row */}
              <Image
                src={member.teamMemberImage || member.img} // Use fallback image
                width="120px"
                height="120px" // Set a fixed height for uniformity
                radius="xl"
                fit="cover" // Ensure the image covers the area without stretching
                alt={member.teamMemberName} // Add alt text for accessibility
              />
              <Text fw="bold" fz="lg" align="center">
                {member.teamMemberName || member.name}
              </Text>
              <Text color={theme.colors.blue[5]} align="center">
                {member.teamMemberTitle || member.role}
              </Text>
            </Stack>
          ))}
        </Flex>
      </Stack>
    </Box>
  );
};

export default AboutUs;
