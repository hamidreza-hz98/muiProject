import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "./Leftbar.styles";

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        دوستان آنلاین
      </Typography>
      <AvatarGroup max={4} size="small" className={classes.avatarGroup}>
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
        <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography className={classes.title}>گالری</Typography>
      <ImageList rowHeight={100} cols={3} className={classes.imageList}>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
            alt="0"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1589118949245-7d38baf380d6`}
            alt="1"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1471357674240-e1a485acb3e1`}
            alt="2"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62`}
            alt="3"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1597645587822-e99fa5d45d25`}
            alt="4"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8`}
            alt="5"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45`}
            alt="6"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c`}
            alt="7"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`}
            alt="8"
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title}>دسته بندی ها</Typography>
      <Link component='button' variant='body2' href='#' className={classes.link} >
        ورزشی
      </Link>
      <Link component='button' variant='body2' href='#' className={classes.link} >
        هنری
      </Link>
      <Divider flexItem style={{marginBottom:'10px'}} />
      <Link component='button' variant='body2' href='#' className={classes.link} >
        سیاسی
      </Link>
      <Link component='button' variant='body2' href='#' className={classes.link} >
        طنز
      </Link>
      <Divider flexItem style={{marginBottom:'10px'}} />
      <Link component='button' variant='body2' href='#' className={classes.link} >
        حیوانات
      </Link>
      <Link component='button' variant='body2' href='#' className={classes.link} >
        اجتماعی
      </Link>
    </Container>
  );
};

export default Leftbar;
