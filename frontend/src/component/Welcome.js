import { Grid, Typography,Button } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom';
const Welcome = (props) => {
  return (
  <React.Fragment>
  <Grid
  container
  item
  direction="column"
  alignItems="center"
  
  style={{ padding: "30px", minHeight: "93vh" }}
>
  <Grid item>
    <Typography variant="h3">Welcome to Job-Finder</Typography>
  </Grid>
  <Grid item>
  <Typography variant="h4">Don't search for jobs.Find the right fit instead.</Typography>
  </Grid>
  <Grid item>
  <Link to='/login'>
  <button
  className="button-style"
  >
  <h3>Click To Search Best Job</h3>
  </button>
  </Link>
        </Grid>
</Grid>

  
  </React.Fragment>  
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
