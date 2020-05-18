import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function ProductItem({ label, image, subspecialties }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={label} src={image} />
      </ListItemAvatar>
      <ListItemText primary={label} secondary={subspecialties.join(", ")} />
    </ListItem>
  );
}

ProductItem.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subspecialties: PropTypes.array,
};

ProductItem.defaultProps = {
  label: "",
  image: "",
  subspecialties: [],
};

export default ProductItem;
