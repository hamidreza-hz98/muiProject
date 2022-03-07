import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import { useStyles } from "./Post.styles";
import beach from "../../assets/post/beach.jpg";

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} title="post_image" image={beach} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            پست اول
          </Typography>
          <Typography variant="body">
            این یک متن ساختگی برای پست اول است و خواندن این متن هیچ چیزی به شما
            اضافه نمیکند! این یک متن ساختگی برای پست اول است و خواندن این متن
            هیچ چیزی به شما اضافه نمیکند!این یک متن ساختگی برای پست اول است و
            خواندن این متن هیچ چیزی به شما اضافه نمیکند!این یک متن ساختگی برای
            پست اول است و خواندن این متن هیچ چیزی به شما اضافه نمیکند!این یک متن
            ساختگی برای پست اول است و خواندن این متن هیچ چیزی به شما اضافه
            نمیکند!این یک متن ساختگی برای پست اول است و خواندن این متن هیچ چیزی
            به شما اضافه نمیکند!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            بیشتر بخوانید
          </Button>
          <Button size="small" color="primary">
            اشتراک گذاری
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Post;
