import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";
import { Box, Text, Title, Loader } from "@mantine/core";
import parse from "html-react-parser";
import blogss from "../../assets/blogss.png";
import { useStyles } from "./styles";

const ViewBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const { state } = useLocation();
  const { classes } = useStyles();
  const [blogData, setBlogData] = useState(state?.blogData || null);
  const [loading, setLoading] = useState(!blogData);

  useEffect(() => {
    if (!blogData) {
      // Fetch the blog data using the ID if it's not available in state
      axios.get(`${backendUrl}/blog/${id}`).then((res) => {
        setBlogData(res.data.data);
        setLoading(false);
      });
    }
  }, [blogData, id]);

  if (loading) return <Loader />;

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${blogss})`, width: "100%" }}
      >
        <Title>{blogData.blogTitle}</Title>
        <Title order={2} fw={100}>
          {new Date(blogData?.createdAt).getDate() +
            "-" +
            new Date(blogData?.createdAt).getMonth() +
            "-" +
            new Date(blogData?.createdAt).getFullYear()}
        </Title>
      </Box>
      <Text className={classes.blogData}>{parse(blogData?.blogDescription)}</Text>
    </Box>
  );
};

export default ViewBlog;
