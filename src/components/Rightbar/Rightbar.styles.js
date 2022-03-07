import {makeStyles} from '@mui/styles'

export const useStyles=makeStyles(theme=>({
    container:{
        paddingTop:theme.spacing(10),
        backgroundColor:theme.palette.primary.main,
        height:'100vh',
        color:'white',
        position:'sticky',
        top:'0',
        [theme.breakpoints.up('md')]:{
            backgroundColor:'white',
            color:'#555',
            border:'1px solid #8e8e8e'
        }
    },
    item:{
        display:'flex',
        alignItems:'center',
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up('md')]:{
            marginBottom:theme.spacing(3),
            cursor:'pointer',
        },
    },
    text:{
        fontWeight:'500',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    icon:{
        marginLeft:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize:'18px'
        }
    }
}))

