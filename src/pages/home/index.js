import React, { useState,useRef,useEffect } from "react";
import './index.css'

import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const Index = (props) => {

    return(
        <div className={'home-container'}>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}
  
export default Index;
