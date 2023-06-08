import React from "react";
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
    <div id="Projects" style={{height:"800px",padding:"5%"}}>
      <h1 style={{fontSize:"50px",padding:"10%"}}>
        History of Germany's deposit
      </h1>
      <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    </div>
  );
};

export default Projects;
