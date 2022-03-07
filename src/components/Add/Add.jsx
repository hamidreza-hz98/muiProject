import { Add as AddIcon } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import React from "react";

import { useStyles } from "./Add.styles";

const Add = () => {
  const classes = useStyles();
  return (
    <div>
      <Tooltip title="افزودن پست" aria-label="add" size='large'>
        <Fab
          color="primary"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};
export default Add;
