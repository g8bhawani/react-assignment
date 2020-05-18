import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ServiceItem({ selectedIndex, handleListItemClick, label }) {
  return (
    <ListItem
      button
      selected={selectedIndex === label}
      onClick={(event) => handleListItemClick(event, 2)}
    >
      <ListItemText primary={label} />
    </ListItem>
  );
}

ServiceItem.propTypes = {
  label: PropTypes.string.isRequired,
  selectedIndex: PropTypes.string.isRequired,
  handleListItemClick: PropTypes.func.isRequired,
};

ServiceItem.defaultProps = {
  label: "",
  selectedIndex: "",
  handleListItemClick: function () {},
};

export default ServiceItem;
