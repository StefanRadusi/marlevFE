import React from "react";
import { productTabs } from "./data";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Products.scss";
import { TabPanelContent } from "./TabPanelContent/TabPanelContent";
import { PageTitle } from "../../common/PageTitle";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Products() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="produse" className="products-wrapper">
      <div className="products-inner-wrapper">
        <PageTitle title="Produse" />
        <div className="products-content">
          <div className="products-content-tabs">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              {productTabs.map((tab, index) => {
                return (
                  <Tab key={index} label={tab.name} {...a11yProps(index)}></Tab>
                );
              })}
            </Tabs>
          </div>
          <TabPanelContent value={value} />
        </div>
      </div>
    </div>
  );
}
