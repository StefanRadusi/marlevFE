import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Dropdown.scss";

export const Dropdown = ({ options, selectedOption, handleChange }) => {
  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className} />;
  };

  // moves the menu below the select input
  const menuProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  console.log(options);

  return (
    <FormControl className="dropdown">
      <Select
        disableUnderline
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={selectedOption}
        onChange={(event) => handleChange(event.target.value)}
        className="dropdown-options"
      >
        {(options || []).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
