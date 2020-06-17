import React from "react";
import { productTabs } from "./data";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import "./Products.scss";
import { TabPanelContent } from "./TabPanelContent/TabPanelContent";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Products() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="products-wrapper" className="products-wrapper">
      <div className="products-inner-wrapper">
        <h2>Produse</h2>
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
                    <Tab label={tab.name} {...a11yProps(index)}></Tab>
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
