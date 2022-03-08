import {makeStyles} from '@mui/styles'

export const useStyles=makeStyles(theme=>({
    container:{
        paddingTop:theme.spacing(10),
        position:'sticky',
        top:'0px'
    },
    title:{
        fontSize:'16px',
        fontWeight:'500',
        color:'#555'
    },
    avatarGroup:{
        marginBottom:'20px',
        overflow:'hidden'
    },
    imageList:{
        marginBottom:'20px'
    },
    link:{
        fontSize:'16px',
        color:'#555 !important',
        marginRight:'15px !important'
    }
    
}))