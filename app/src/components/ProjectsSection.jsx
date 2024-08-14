import React from 'react'; 
import VerticalTabL from './Vertical_Tab_components/VerticalTab_left';
import VerticalTabR from './Vertical_Tab_components/VerticalTab_right';
import resumeData from "./resumeData";

const ProjectsSection = () => {


  return (
    <div>
      <h1 className='text-4xl font-extralight text-left p-11'>Web Development Projects</h1>
      <VerticalTabL data={resumeData.websites} />

      <h1 className='text-4xl font-extralight text-left p-11'>React Native Projects</h1>
      <VerticalTabR data={resumeData.mobile} />
    </div>
  )
}

export default ProjectsSection