import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
// import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import logo from '../../logo.svg';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

const Grids = (props) => {
  const classes = useStyles();
  const { width } = props;

    return (
        <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
      <CardActionArea>
        <Hidden xsDown>
        
          <Paper className={classes.paper}>
            <img src={logo} alt="" />
          </Paper>
          
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}><img src={logo} alt="" /></Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}><img src={logo} alt="" /></Paper>
        </Hidden>
        
        <Hidden lgDown>
          <Paper className={classes.paper}><img src={logo} alt="" /></Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}><img src={logo} alt="" /></Paper>
        </Hidden>
        </CardActionArea> 
      </div>
    </div>
    );
};

export default Grids;