import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";

import ServiceItem from "../../components/ServiceItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  progress: {
    width: "100%",
    textAlign: "center",
    margin: "auto",
  },
  notFound: {
    width: "100%",
    textAlign: "center",
    margin: "auto",
  },
}));

function Services({ fetchServicesData, filterProvidersData, items, pending }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  React.useEffect(() => {
    fetchServicesData();
  }, [fetchServicesData]);

  const handleListItemClick = (serviceName) => {
    setSelectedIndex(serviceName);
    filterProvidersData(serviceName);
  };

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
        <Typography variant="overline" display="block" gutterBottom>
          No Services Available
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folder">
        {items.map((service) => (
          <ServiceItem
            key={service.id}
            handleListItemClick={() =>
              handleListItemClick(service.attributes.name)
            }
            selectedIndex={selectedIndex}
            label={service.attributes.name}
          />
        ))}
      </List>
    </div>
  );
}

Services.propTypes = {
  items: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired,
  fetchServicesData: PropTypes.func.isRequired,
  fetchProvidersData: PropTypes.func.isRequired,
};

Services.defaultProps = {
  items: [],
  pending: true,
  fetchServicesData: function () {},
  fetchProvidersData: function () {},
};

export default Services;
