import React, { useState,useRef,useEffect } from "react";
import './index.css'

import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import StudentNameSection from './StudentNameSection'
import CourseSelectionSection from './CourseSelectionSection'
import StudentDetailsSection from './StudentDetailsSection'
import AddressSection from './AddressSection'
import EmergencyContactSection from './EmergencyContactSection'
import EducationBackgroundSection from './EducationBackgroundSection'
import WorkExperienceSection from './WorkExperienceSection'
import StudyReasonSection from './StudyReasonSection'
import AgentDetailsSection from './AgentDetailsSection'
import HowFindUsSection from './HowFindUsSection'
import UploadDocumentsSection from './UploadDocumentsSection'
import MessageSection from './MessageSection'
import DeclarationSection from './DeclarationSection'
import SubmitSection from './SubmitSection'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'

const Index = (props) => {

    return(
        <div className={'home-container'}>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <StudentNameSection />
            <CourseSelectionSection />
            <StudentDetailsSection />
            <AddressSection />
            <EmergencyContactSection />
            <EducationBackgroundSection />
            <WorkExperienceSection />
            <StudyReasonSection />
            <AgentDetailsSection />
            <HowFindUsSection />
            <UploadDocumentsSection />
            <MessageSection />
            <DeclarationSection />
            <SubmitSection />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
        </div>
    )
}
  
export default Index;
