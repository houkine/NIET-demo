
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
    const [FindUs,setFindUs] = useState(1)
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>How did you find us?</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>Where did you first hear about NIET?</div>
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.formControl_left}>
                <InputLabel id="demo-simple-select-filled-label">Where did you first hear about NIET?</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={FindUs}
                    onChange={e=>setFindUs(e.target.value)}
                  >
                    <MenuItem value={1}>Facebook</MenuItem>
                    <MenuItem value={2}>Internet search or digital media link</MenuItem>
                    <MenuItem value={3}>Instagram</MenuItem>
                    <MenuItem value={4}>WeChat</MenuItem>
                    <MenuItem value={5}>Social Media</MenuItem>
                    <MenuItem value={6}>Google Search</MenuItem>
                    <MenuItem value={7}>Training.gov</MenuItem>
                    <MenuItem value={8}>Website</MenuItem>
                    <MenuItem value={9}>Word of Mouth</MenuItem>
                    <MenuItem value={10}>NIET education agent</MenuItem>
                    <MenuItem value={11}>Australian Government MySkills Website</MenuItem>
                    <MenuItem value={12}>From one of our university partners</MenuItem>
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