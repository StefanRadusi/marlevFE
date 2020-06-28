import React from "react";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './TabPanelContent.scss'

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tabpanel-uimaterial"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className="panel-box-data">
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}
