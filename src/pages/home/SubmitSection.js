
/**
 * section 3, background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const Index = ({}) => {
    const classes = useStyles();
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <Button variant="contained" color="primary" className={classes.Button}>
                Submit
              </Button>
            </div>
            <div className={'FormSection-gap'} />

        </div>
    )
}
  
export default Index;

const useStyles = makeStyles((theme) => ({
    Button: {
      width:'60%',
      height:50,
      margin:'auto',
    },
}));