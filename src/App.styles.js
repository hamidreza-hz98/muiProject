import {makeStyles} from '@mui/styles'

export const useStyles=makeStyles(theme=>({
    leftbar:{
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    }

}))