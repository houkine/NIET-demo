
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
    const [YourPreferredProgram,setYourPreferredProgram] = useState('')
    const [PreferredCampus,setPreferredCampus] = useState('')
    const [PreferredCommencementMonth,setPreferredCommencementMonth] = useState('')
    const [AcademicCreditNotRequired,setAcademicCreditNotRequired] = useState('')
    const [PayInEqualQuarterlyInstalments,setPayInEqualQuarterlyInstalments] = useState('')
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Course Selection</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.TextField_left}>
                <InputLabel id="demo-simple-select-filled-label">Your Preferred Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={YourPreferredProgram}
                    onChange={e=>setYourPreferredProgram(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Preferred Campus</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={PreferredCampus}
                    onChange={e=>setPreferredCampus(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Preferred Commencement Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={PreferredCommencementMonth}
                    onChange={e=>setPreferredCommencementMonth(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              </FormControl>
            </div>
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.TextField_left}>
                <InputLabel id="demo-simple-select-filled-label">Academic credit not required</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={AcademicCreditNotRequired}
                    onChange={e=>setAcademicCreditNotRequired(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Pay in equal quarterly instalments</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={PayInEqualQuarterlyInstalments}
                    onChange={e=>setPayInEqualQuarterlyInstalments(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
      marginLeft:10,
    },
    TextField_left: {
      flex:1,
    },
    formControl: {
      flex:1,
      minWidth: 120,
    },
}));