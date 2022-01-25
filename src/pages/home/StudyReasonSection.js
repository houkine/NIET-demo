
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
    const [StudyReason,setStudyReason] = useState('')
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Study reason</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.formControl_left}>
                <InputLabel id="demo-simple-select-filled-label">Please choose your main reason for wanting to take this course*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={StudyReason}
                    onChange={e=>setStudyReason(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>To get a job</MenuItem>
                    <MenuItem value={2}>To develop my existing business</MenuItem>
                    <MenuItem value={3}>To start my own business</MenuItem>
                    <MenuItem value={4}>To try for a different career</MenuItem>
                    <MenuItem value={5}>To get a better job or promotion</MenuItem>
                    <MenuItem value={6}>It was a requirement of my job</MenuItem>
                    <MenuItem value={7}>I wanted extra skills for my job</MenuItem>
                    <MenuItem value={8}>For personal interest or self-development</MenuItem>
                    <MenuItem value={9}>Other reasons</MenuItem>
                  </Select>
              </FormControl>
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