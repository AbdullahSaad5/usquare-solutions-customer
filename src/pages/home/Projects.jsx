import { Box, Loader, Title, useMantineTheme } from "@mantine/core";
import  { useEffect, useState } from "react";
import { useStyles } from "./styles";
import ServiceCard from "./ServiceCard";
import { Carousel } from "@mantine/carousel";
import axios from "axios";
import { backendUrl } from "../../constants";

const Projects = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/project/get_all").then((res) => {
      setPortfolio(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Box className={classes.services}>
      <Title align="center" color={theme.colors.blue} fw={400}>
        RECENT PROJECTS
      </Title>
      <Title order={4} align="center" fw={100}>
        View our some Latest Projects
      </Title>
      <Carousel
        slideSize="33.333333%"
        slideGap="md"
        mt="xl"
        loop
        styles={{
          control: { backgroundColor: theme.colors.blue, color: "white" },
        }}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {loading ? (
          <Loader my="50px" />
        ) : (
          portfolio?.map((obj,_id) => {
            return (
              <Carousel.Slide
                key={_id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceCard
                  title={obj?.title}
                  description={obj?.shortDescription}
                  picture={obj?.coverImage}
                  link={obj?.link}
                />
              </Carousel.Slide>
            );
          })
        )}
      </Carousel>
    </Box>
  );
};

export default Projects;
