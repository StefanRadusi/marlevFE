import React from "react";
import { TabPanel } from "./TabPanel";
import {balustrade, confectiiSpeciale, panouriGard, portiAcces} from "../data";
import { TabPanelArticle } from "../TabPanelArticle/TabPanelArticle";
import './TabPanelContent.scss'
import {ImagePreviewList} from "../ImagePreviewList";

export function TabPanelContent(props) {
  const { value } = props;

  return (
    <>
      <TabPanel value={value} index={0}>
        {panouriGard.map((panou, index) => {
          return <TabPanelArticle key={index} element={panou} />;
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {portiAcces.map((poarta, index) => {
          return <TabPanelArticle key={index} element={poarta}/>
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ImagePreviewList elementList={balustrade}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ImagePreviewList elementList={confectiiSpeciale}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
    </>
  );
}
