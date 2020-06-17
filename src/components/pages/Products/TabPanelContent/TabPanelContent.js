import React from "react";
import { TabPanel } from "./TabPanel";
import { panouriGard } from "../data";
import { TabPanelArticle } from "../TabPanelArticle/TabPanelArticle";

export function TabPanelContent(props) {
  const { value } = props;

  return (
    <>
      <TabPanel value={value} index={0}>
        {panouriGard.map((panou, index) => {
          return <TabPanelArticle key={index} panou={panou} />;
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
    </>
  );
}
