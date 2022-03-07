import {makeStyles} from '@mui/styles'

export const useStyles=makeStyles(theme=>({
    media:{
        height:'250px',
        [theme.breakpoints.down('sm')]:{
            height:'150px'
        }
    },
    card:{
        marginBottom:theme.spacing(5),
    }
}))