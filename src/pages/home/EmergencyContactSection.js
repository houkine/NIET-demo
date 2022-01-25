
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
    const [Country,setCountry] = useState('')
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Emergency contact
</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Family Name*" variant="filled" />
              <TextField className={classes.TextField} label="Family Name*" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Relationship to you*" variant="filled" />
              <TextField className={classes.TextField} label="Email*" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Phone*" variant="filled" />
              <TextField className={classes.TextField} label="Mobile" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Street Address*" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="City / Suburb*" variant="filled" />
              <TextField className={classes.TextField} label="State / Provence*" variant="filled" />
            </div>
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Post / Zip Code*" variant="filled" />
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Country*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={Country}
                    onChange={e=>setCountry(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Australian</MenuItem>
                    <MenuItem value={2}>Afghan</MenuItem>
                    <MenuItem value={3}>Albanian</MenuItem>
                    <MenuItem value={4}>Algerian</MenuItem>
                    <MenuItem value={5}>American</MenuItem>
                    <MenuItem value={6}>Andorran</MenuItem>
                    <MenuItem value={7}>Angolan</MenuItem>
                    <MenuItem value={8}>Antiguans</MenuItem>
                    <MenuItem value={9}>Argentinean</MenuItem>
                    <MenuItem value={10}>Armenian</MenuItem>
                    <MenuItem value={11}>Austrian</MenuItem>
                    <MenuItem value={12}>Azerbaijani</MenuItem>
                    <MenuItem value={13}>Bahamian</MenuItem>
                    <MenuItem value={14}>Bahraini</MenuItem>
                    <MenuItem value={15}>Bangladeshi</MenuItem>
                    <MenuItem value={16}>Barbadian</MenuItem>
                    <MenuItem value={17}>Barbudans</MenuItem>
                    <MenuItem value={18}>Batswana</MenuItem>
                    <MenuItem value={19}>Belarusian</MenuItem>
                    <MenuItem value={20}>Belgian</MenuItem>
                    <MenuItem value={21}>Belizean</MenuItem>
                    <MenuItem value={22}>Beninese</MenuItem>
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