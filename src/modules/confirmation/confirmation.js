import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    marginTop: 10
  }
}));

const Confirmation = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <h1>Thank you for the Booking. Click the below button to return to home page</h1>
      <button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => history.push("/")}
      >Back to Home</button>
    </>
  );
};

Confirmation.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object
};

export default Confirmation;