import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  
  [theme.breakpoints.down('md')]: {
    display: (props) => (props.open ? "flex" : "none"),
    width:'60%'
  },
  },
  input: {
    marginRight: theme.spacing(1),
    color: "white !important",
    width:'100%'
  },

  icon: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginLeft: theme.spacing(2),
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  logoSm: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  searchButton: {
    display: "flex",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
  
}));

export default useStyles;
