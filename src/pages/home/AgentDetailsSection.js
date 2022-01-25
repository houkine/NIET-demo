
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
            <div className={'FormSection-title'}>Agent details</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.formControl_left}>
                <InputLabel id="demo-simple-select-filled-label">Please let us know if you are using an International Education Agent*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={StudyReason}
                    onChange={e=>setStudyReason(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>I am an domestic student applying directly to the College</MenuItem>
                    <MenuItem value={2}>I am an International student applying directly to the College</MenuItem>
                    <MenuItem value={3}>This application is being lodged through an International Education Agency as detailed below</MenuItem>
                  </Select>
              </FormControl>
            </div>
            <div className={'FormSection-content'}>Please note: Not all courses are available at all campuses. Please check the course page for details.</div>
            <div className={'FormSection-content'}>
                <TextField className={classes.TextField_left} label="Agency Name (if relevant)" variant="filled" />
                <TextField className={classes.TextField} label="Counselor's Name" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
                <TextField className={classes.TextField_left} label="Counselor's Email" variant="filled" />
                <TextField className={classes.TextField} label="Counselor's Tel" variant="filled" />
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