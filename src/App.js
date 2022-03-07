//react...
import React from "react";

//material ui components...
import { Grid } from "@mui/material";

//custom components...
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Feed from "./components/Feed/Feed";
import Add from './components/Add/Add'

//style sheets...
import {useStyles} from './App.styles'

function App() {
  const classes=useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item md={2} sm={3} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item  md={7} sm={9} xs={10}>
          <Feed />
        </Grid>
        <Grid item  md={3}   className={classes.leftbar}>
          <Leftbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
