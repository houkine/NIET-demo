
/**
 * section 3, background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const Index = ({}) => {
    const classes = useStyles();
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Education background</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Name of High School*" variant="filled" />
              <TextField className={classes.TextField} label="High School Certificate Type*" variant="filled" />
              <TextField className={classes.TextField} label="Year of Completion*" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Name of Next Institution" variant="filled" />
              <TextField className={classes.TextField} label="Qualification" variant="filled" />
              <TextField className={classes.TextField} label="Year of Completion" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Name of Next Institution" variant="filled" />
              <TextField className={classes.TextField} label="Qualification" variant="filled" />
              <TextField className={classes.TextField} label="Year of Completion" variant="filled" />
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
    formControl: {
      flex:1,
      minWidth: 120,
      marginLeft:20,
    },
    formControl_left: {
      flex:1,
      minWidth: 120,
    },
}));