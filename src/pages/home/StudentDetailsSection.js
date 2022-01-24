
/**
 * section Student details
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
    const [StudentResidentialStatus,setStudentResidentialStatus] = useState('')
    const [StudentVisaRequirements,setStudentVisaRequirements] = useState('')

    const [Gender,setGender] = useState('')

    const [WhatIsYourNationality,setWhatIsYourNationality] = useState('')
    const [WhereWereYouBorn,setWhereWereYouBorn] = useState('')

    const [AboriginalOrTorresStraitIslander,setAboriginalOrTorresStraitIslander] = useState('')

    const [SpeakEnglish,setSpeakEnglish] = useState('')
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Student details</div>
            <div className={'FormSection-gap'} />
            {/* line 1 */}
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.TextField_left}>
                <InputLabel id="demo-simple-select-filled-label">Student residential status*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={StudentResidentialStatus}
                    onChange={e=>setStudentResidentialStatus(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>I am a citizen of Australia</MenuItem>
                    <MenuItem value={2}>I am a citizen of New Zealand</MenuItem>
                    <MenuItem value={3}>I am an International Student</MenuItem>
                    <MenuItem value={4}>I am a permanent resident of Australia</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.TextField}>
                <InputLabel id="demo-simple-select-filled-label">Student visa requirements*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={StudentVisaRequirements}
                    onChange={e=>setStudentVisaRequirements(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>I do not require a student visa</MenuItem>
                    <MenuItem value={2}>I will apply for my student visa in Australia</MenuItem>
                    <MenuItem value={3}>I will apply for my student visa outside Australia</MenuItem>
                  </Select>
              </FormControl>
            </div>
            {/* line 2 */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Date of birth" variant="filled" />
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={Gender}
                    onChange={e=>setGender(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Female</MenuItem>
                    <MenuItem value={3}>Other</MenuItem>
                  </Select>
              </FormControl>
            </div>
            {/* line 3 */}
            <div className={'FormSection-content'}>
              <TextField className={classes.formControl_left} label="Email*" variant="filled" />
              <TextField className={classes.formControl} label="Phone" variant="filled" />
              <TextField className={classes.formControl} label="Mobile*" variant="filled" />
            </div>
            {/* line 4 */}
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.formControl_left}>
                <InputLabel id="demo-simple-select-filled-label">What is your nationality?*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={WhatIsYourNationality}
                    onChange={e=>setWhatIsYourNationality(e.target.value)}
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
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Where were you born?*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={WhereWereYouBorn}
                    onChange={e=>setWhereWereYouBorn(e.target.value)}
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
            {/* line 5 */}
            <div className={'FormSection-content'}>
              <FormControl variant="filled" className={classes.formControl_left}>
                <InputLabel id="demo-simple-select-filled-label">Are you of Aboriginal or Torres Strait Islander origin?*</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={AboriginalOrTorresStraitIslander}
                    onChange={e=>setAboriginalOrTorresStraitIslander(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>I am not of either Aboriginal nor Torres Strait Islander origin</MenuItem>
                    <MenuItem value={2}>I am of Aboriginal origin</MenuItem>
                    <MenuItem value={3}>I am of Torres Strait Islander origin</MenuItem>
                    <MenuItem value={4}>I am of both Aboriginal and Torres Strait Islander origin</MenuItem>
                  </Select>
              </FormControl>
            </div>
            {/* line 6 */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="What is the main language spoken at your permanent home address?" variant="filled" />
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">How well do you speak English? *</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    value={SpeakEnglish}
                    onChange={e=>setSpeakEnglish(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Beginner</MenuItem>
                    <MenuItem value={2}>Low Intermediate</MenuItem>
                    <MenuItem value={3}>Intermediate</MenuItem>
                    <MenuItem value={4}>Upper Intermediate</MenuItem>
                    <MenuItem value={5}>Advanced</MenuItem>
                    <MenuItem value={6}>Fluent</MenuItem>
                    <MenuItem value={7}>{'Fluent – Native Speaker'}</MenuItem>
                  </Select>
              </FormControl>
            </div>
            {/* line 7 */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="If relevant, please note any English level test results such as IELTS, PTE, TOEIC, etc.." variant="filled" />
            </div>
            {/* line 8 */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Please note any medical conditions or required support services, equipment and facilities." variant="filled" />
            </div>
            {/* line 9 */}
            <div className={'FormSection-content'}>
              <TextField className={classes.TextField_left} label="Passport/ID Number*" variant="filled" />
              <TextField className={classes.TextField} label="USI Number (if known)" variant="filled" />
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
    formControl_left: {
      flex:1,
      minWidth: 120,
    },
    formControl: {
      flex:1,
      minWidth: 120,
      marginLeft:20,
    },
  }));