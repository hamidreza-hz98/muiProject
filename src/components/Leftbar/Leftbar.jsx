import { Container } from "@mui/material";
import React from "react";
import { useStyles } from "./Leftbar.styles";

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>اینجا ساید بار سمت چپه</div>
    </Container>
  );
};

export default Leftbar;

