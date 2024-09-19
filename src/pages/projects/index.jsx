import { Box, Flex, Loader, Title, Button, Group } from "@mantine/core"; // Added Button and Group
import axios from "axios";
import { useEffect, useState } from "react";
import aboutUs from "../../assets/aboutUs.png";
import ProjectCard from "../../components/ProjectCard";

import { backendUrl } from "../../constants";
import { useStyles } from "./styles";

const Portfolio = () => {
  const { classes } = useStyles();
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/project/get_all").then((res) => {
      // Only keep unblocked projects
      const unblockedProjects = res.data.filter((project) => !project.blocked);
      setPortfolio(unblockedProjects);
      setLoading(false);

      // Extract unique categories from unblocked projects
      const uniqueCategories = [...new Set(unblockedProjects.map((item) => item.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  // Function to filter projects by category or sort by latest
  const filteredPortfolio = portfolio
    .filter((project) => {
      if (selectedCategory === "All") return true; // Show all projects
      if (selectedCategory === "Latest") return true; // This will be handled in sorting
      return project.category === selectedCategory; // Filter by category
    })
    .sort((a, b) => {
      if (selectedCategory === "Latest") {
        return new Date(b.createdAt) - new Date(a.createdAt); // Sort by date, latest first
      }
      return 0; // No sorting if not "Latest"
    });

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
      >
        <Title>OUR PROJECTS</Title>
        <Title order={3}>From Concept To Creation</Title>
      </Box>

      {/* Filter Buttons */}
      <Group position="center" my="20px" spacing="md">
        <Button
          variant={selectedCategory === "All" ? "filled" : "outline"}
          onClick={() => handleCategorySelect("All")}
        >
          All
        </Button>
        <Button
          variant={selectedCategory === "Latest" ? "filled" : "outline"}
          onClick={() => handleCategorySelect("Latest")}
        >
          Latest
        </Button>

        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "filled" : "outline"}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </Group>

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
          filteredPortfolio.map((obj, _id) => {
            return <ProjectCard obj={obj} ind={_id} key={_id} />;
          })
        )}
      </Flex>
    </Box>
  );
};

export default Portfolio;
