import React from "react";
import Timeline from './Timeline';


import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const Projects = () => {
  // box
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ]
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  return (
    <div id="Projects" style={{height:"1200px",padding:"5%"}}>
      <h1 style={{fontSize:"50px",paddingLeft:"10%",paddingRight:"10%",paddingTop:"5%",paddingBlockEnd:"5%"}}>
      History of Germany's deposit
      </h1>
      <Timeline/>
    </div>
  );
};

export default Projects;
