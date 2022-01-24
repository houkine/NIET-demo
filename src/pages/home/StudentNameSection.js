
/**
 * section 3, background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const Index = ({}) => {
    const classes = useStyles();
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Student name</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
                <TextField className={classes.TextField_left} label="Family Name*" variant="filled" />
                <TextField className={classes.TextField} id="filled-basic" label="First Name*" variant="filled" />
            </div>
        </div>
    )
}
  
export default Index;

const useStyles = makeStyles((theme) => ({
    TextField: {
      flex:1,
      marginLeft:20,
    },
    TextField_left: {
      flex:1,
    },
  }));