
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
    const [Files,setFiles] = useState([])
    const FileUpload = files =>{
      console.log('FileUpload=',files)
      let filelist = []
      for (let index = 0; index < files.length; index++) {
        filelist.push(files[index])
        // console.log(files[index])
      }
      console.log('filelist=',filelist)

      setFiles(filelist)
    }
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Declaration</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>By submitting this application form, I declare that:</div>
            <ul className={'DeclarationSection-documents'}>
              <li className={'DeclarationSection-document'}>I have read, understood and accepted all the Provider’s relevant terms, policies and procedures including change of enrolment, cancellation and refund policy, and deferral, suspension of studies and code of conduct and any other information and policies and procedures that can be found on the website.</li>
              <li className={'DeclarationSection-document'}>I hereby agree to be bound and adhere to all applicable standards of conduct, laws, regulations, policies and procedures, and acknowledge that failure to do so may result in the suspension or cancellation of my enrolment.</li>
              <li className={'DeclarationSection-document'}>By enrolling in a course, I understand and agree to give consent for the Provider to apply for or retrieve a (USI) Unique Student Identifier on my behalf. I understand that the Provider may share with the Registrar my personal information including my name, date of birth, Country of birth, gender and contact details.</li>
              <li className={'DeclarationSection-document'}>I acknowledge that the Provider is in no way obligated to offer me a place in a course and; that preferred commencement dates are subject to availability and; that scheduling of courses is subject to change at the Provider’s sole discretion.</li>
              <li className={'DeclarationSection-document'}>By submitting this application I declare that all information and documentation provided by me is accurate and true. I acknowledge that submission of false, incorrect, incomplete or misleading information may result in the delay or cancellation of my enrolment.</li>
            </ul>
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