import { Container } from "@mui/material";
import React from "react";
import {useStyles} from './Feed.styles'
import Post from '../Post/Post'

const Feed = () => {
    const classes=useStyles()
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
