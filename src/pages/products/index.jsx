import { Box, Flex, Loader, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import aboutUs from "../../assets/aboutUs.png";
import ProjectCard from "../../components/ProjectCard";
import { backendUrl } from "../../constants";
import { useStyles } from "./styles";

const Products = () => {
  const { classes } = useStyles();
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/product/get_all").then((res) => {
      setPortfolio(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
      >
        <Title>OUR PRODUCTS</Title>
        <Title order={3}>
          Products with latest Technologies and ease of use
        </Title>
      </Box>
      <Flex
        wrap={"wrap"}
        gap="20px"
        m="auto"
        justify={"center"}
        rowGap={"30px"}
        className={classes.content}
      >
        {loading ? (
          <Loader m="auto" />
        ) : (
          portfolio.map((obj, id) => {
            return <ProjectCard obj={obj} ind={id} key={id} />;
          })
        )}
      </Flex>
    </Box>
  );
};

export default Products;
