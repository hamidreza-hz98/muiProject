import { Add as AddIcon } from "@mui/icons-material";
import {
  Fab,
  Tooltip,
  Modal,
  Container,
  TextField,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

import { useStyles } from "./Add.styles";

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert,setOpenAlert]=useState(false);
  return (
    <div>
      <Tooltip
        title="افزودن پست"
        aria-label="add"
        size="large"
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} className={classes.modal}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
              size='small'
                placeholder="عنوان"
                style={{ width: "100%" }}
                variant="outlined"
              />
            </div>
            <div className={classes.item}>
              <TextField size='small'
                label="پیام شما"
                multiline
                rows={4}
                defaultValue="داستان خودت رو بگو..."
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <FormControl className={classes.select} size='small'>
                <InputLabel transformOrigin={{vertical:'top',horizontal:'right'}} className={classes.label}>انتخاب</InputLabel>
                <Select>
                  <MenuItem value="public" size='small'>عمومی</MenuItem>
                  <MenuItem value="private" size='small'>خصوصی</MenuItem>
                  <MenuItem value="friends" size='small'>نمایش برای دوستان</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div className={classes.item}>
              <FormLabel component="legend">دسترسی کامنت گذاری؟</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="everybody"
                  label="برای همه"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="friends"
                  label="برای دوستان"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="nobody"
                  label="هیچ کس"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="custom"
                  label="سفارشی(کاربران ویژه)"
                  control={<Radio size="small" />}
                  disabled
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginLeft: "10px" }}
                onClick={()=>{setOpenAlert(true); setOpen(false)}}
              >
                ارسال
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "10px" }}
                onClick={()=>setOpen(false)}
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={5000} onClose={()=>setOpenAlert(false)}  > 
        <Alert onClose={()=>setOpenAlert(false)} severity='success' sx={{width:'100%'}} >
          پیام با موفقیت ارسال شد ! 
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Add;
