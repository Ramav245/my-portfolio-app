import React from 'react';
import { Tabs } from '@mui/base/Tabs';

import TabsList from './TabsList';
import Tab from './Tab';
import TabPanel from './TabPanel';

//pages
import HeroSection from './HeroSection';
import Contact from './ContactSection';

const UnstyledTabsIntroduction = () => {
  return (
    <div>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>Home</Tab>
          <Tab value={2}>Contact</Tab>
        </TabsList>
        <TabPanel value={0}><HeroSection/></TabPanel>
        <TabPanel value={2}><Contact/></TabPanel>
      </Tabs>
    </div>
  );
}
export default UnstyledTabsIntroduction;