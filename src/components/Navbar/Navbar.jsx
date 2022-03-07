//react...
import React, { useState } from "react";

//material ui components...
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, InputBase } from "@mui/material";

//material ui icons...
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";

//stylesheet...
import useStyles from "./Navbar.styles";

import profile from '../../assets/profileImg/profile.jpg'


const Navbar = () => {
  const [open,setOpen]=useState(false)
  const classes=useStyles({open});
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg} >صفحه اصلی</Typography>
        <Typography variant="h6" className={classes.logoSm} >خانه</Typography>
        <div  className={classes.search}>
            <Search />
            <InputBase placeholder="جستجو کنید ..." className={classes.input}/>
            {open?
            <Cancel className={classes.cancel} onClick={()=>setOpen(!open)} />
            :null
            }
        </div>
        <div className={classes.icon}>
            <Search className={classes.searchButton} onClick={()=>setOpen(!open)} />
            <Badge badgeContent={4} color='error'  className={classes.badge} >
                <Mail />
            </Badge>
            <Badge badgeContent={3} color='error'  className={classes.badge} >
                <Notifications />
            </Badge>
            <Avatar alt='profileImg' src={profile} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
