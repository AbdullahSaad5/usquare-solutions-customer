/* eslint-disable react/prop-types */
import { Image, Stack, Text, useMantineTheme } from "@mantine/core";

import { useNavigate } from "react-router-dom";

const BlogCard = ({ obj, _id }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  return (
    <Stack
      key={_id}
      p="10px"
      spacing={"xs"}
      style={{
        cursor: "pointer",
        border: "1px solid rgb(0,0,0,0.1)",
        borderRadius: "10px",
        boxShadow: "0px 5px 5px rgb(0,0,0,0.2)",
      }}
      onClick={() => navigate(`/view-blog/${obj._id}`, { state: { blogData: obj } })}


    >
      <Image src={obj?.blogImage} height={"280px"} />
      <Text fz="xs" align="left">
        Published:{" "}
        {new Date(obj?.createdAt).getDate() +
          "-" +
          new Date(obj?.createdAt).getMonth() +
          "-" +
          new Date(obj?.createdAt).getFullYear()}
      </Text>
      <Text fw={"bold"} fz={"lg"} color={theme.colors.blue} align="left">
        {obj?.blogTitle}
      </Text>
      <Text fz="lg" align="left">
        {obj?.short_description}
      </Text>
    </Stack>
  );
};

export default BlogCard;
