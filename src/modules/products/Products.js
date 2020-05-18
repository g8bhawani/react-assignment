import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProductItem from "../../components/ProductItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  progress: {
    width: "100%",
    textAlign: "center",
    marginTop: "20%",
  },
  notFound: {
    width: "100%",
    textAlign: "center",
    marginTop: "20%",
  },
}));

function Products({ fetchProvidersData, items, pending }) {
  const classes = useStyles();

  React.useEffect(() => {
    fetchProvidersData();
  }, [fetchProvidersData]);

  if (pending) {
    return (
      <div className={classes.progress}>
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className={classes.notFound}>
        <Typography variant="h5" gutterBottom>
          No Products Available
        </Typography>
      </div>
    );
  }
  return (
    <List className={classes.root}>
      {items.map((product) => (
        <ProductItem
          key={product.id}
          label={product.attributes.name}
          image={product.attributes["profile-image"]}
          subspecialties={product.attributes.subspecialties}
        />
      ))}
    </List>
  );
}

Products.propTypes = {
  items: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired,
  fetchProvidersData: PropTypes.func.isRequired,
};

Products.defaultProps = {
  items: [],
  pending: true,
  fetchProvidersData: function () {},
};

export default Products;
