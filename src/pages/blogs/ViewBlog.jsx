import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";
import { Box, Text, Title, Loader } from "@mantine/core";
import parse from "html-react-parser";
import blogss from "../../assets/blogss.png";
import { useStyles } from "./styles";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ViewBlog = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { classes } = useStyles();
  const [blogData, setBlogData] = useState(state?.blogData || null);
  const [loading, setLoading] = useState(!blogData);

  useEffect(() => {
    if (!blogData) {
      axios.get(`${backendUrl}/blog/${id}`).then((res) => {
        setBlogData(res.data.data);
        setLoading(false);
      });
    }
  }, [blogData, id]);

  if (loading) return <Loader />;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "headline": blogData.blogTitle,
    "description": blogData.blogDescription.slice(0, 160),
    "image": blogss,
    "author": {
      "@type": "Person",
      "name": blogData.author || "Admin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Organization Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourwebsite.com/logo.png" // Replace with your actual logo URL
      }
    },
    "datePublished": blogData.createdAt,
    "dateModified": blogData.updatedAt || blogData.createdAt
  };

  return (
    <HelmetProvider>
      <Box>
        <Helmet>
          <title>{blogData.blogTitle || "Blog Page"}</title>
          <meta name="description" content={blogData.blogDescription.slice(0, 160) || "Read this blog post for more information."} />
          <meta property="og:title" content={blogData.blogTitle} />
          <meta property="og:description" content={blogData.blogDescription.slice(0, 160)} />
          <meta property="og:image" content={blogss} />
          <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        </Helmet>

        <Box
          className={classes.main}
          style={{ backgroundImage: `url(${blogss})`, width: "100%" }}
        >
          <Title>{blogData.blogTitle}</Title>
          <Title order={2} fw={100}>
            {new Date(blogData.createdAt).toLocaleDateString()}
          </Title>
        </Box>
        <Text className={classes.blogData}>{parse(blogData.blogDescription)}</Text>
      </Box>
    </HelmetProvider>
  );
};

export default ViewBlog;
