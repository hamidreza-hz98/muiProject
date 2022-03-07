import {  Add as AddIcon } from '@mui/icons-material'
import { Fab , Tooltip} from '@mui/material'
import React from 'react'

import {useStyles} from './Add.styles'

const Add=()=>{
const classes=useStyles()
return(
    <div >
        <Tooltip title='add' aria-label='add'  >
            <Fab color='primary' size='small' >
                <AddIcon  />
            </Fab>
        </Tooltip>
    </div>
)
}
export default Add