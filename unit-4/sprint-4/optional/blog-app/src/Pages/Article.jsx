import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBlog } from "../Redux/Blogs/action";
import { EditIcon } from "@chakra-ui/icons";
const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBlog = useSelector((state) => state.blogReducer.currentBlog);

  const {pathname} = useLocation();
  useEffect(() => {
    if (id && currentBlog?.id != id) {
      dispatch(fetchSingleBlog(id));
    }
  }, [currentBlog, dispatch, id]);

  // console.log(currentBlog, id);
  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={currentBlog?.author?.name}
          size="lg"
          src={currentBlog?.author?.profile_pic}
        />
        <Box>
          <Link to={`${pathname}/update`}>
            <EditIcon />
          </Link>
        </Box>
        <Text fontSize="lg">{currentBlog?.author?.name}</Text>
        <Text>{currentBlog?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>{currentBlog?.title}</Heading>
          <Text fontSize="lg">{currentBlog?.sub_title}</Text>
          <Box>
            <Image
              rounded={"lg"}
              src={currentBlog?.thumbnail_pic}
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
           {currentBlog.description}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
