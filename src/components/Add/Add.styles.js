import {makeStyles} from '@mui/styles'

export const useStyles=makeStyles(theme=>({
   fab:{
       position:'fixed !important',
       bottom:'20px',
       right:'10px'
   },
   modal:{
    width:'500px',
    height:'550px',
    position:'absolute',
       top:'0',
       right:'0',
       left:'0',
       bottom:'0',
       margin:'auto',
       backgroundColor:'white',
       
       [theme.breakpoints.down('sm')]:{
           width:'100vw',
           height:'100vh',
       }
   },
   container:{
       width:'500px',
       height:'550px',
       backgroundColor:'white',
       [theme.breakpoints.down('sm')]:{
           width:'100vw',
           height:'100vh',
       }

   },
   form:{
       padding:theme.spacing(2)
   },
   item:{
       marginBottom:theme.spacing(3)
   },
   select:{
       width:'100%',
   },
   label:{
       display:'block',
       width:'95%',
       
   }
}))