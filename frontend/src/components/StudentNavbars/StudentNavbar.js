import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import Menu from "@material-ui/icons/Menu";

import StudentNavbarLinks from './StudentNavbarLinks.js';
import Button from 'components/CustomButtons/StudentButton.js'

import styles from 'assets/jss/material-dashboard-react/components/headerStyle.js';
import { RouterSharp } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export default function StudentNavbar(props) {
    const classes = useStyles();
    
    const { color, routes } = props;
    const appBarClasses = classNames({
        [" " + classes[color]]: color
    });
    return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="https://novelicatech.com/student" className={classes.title}>
            Loadouts
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <StudentNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
    );
}

StudentNavbar.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
    handleDrawerToggle: PropTypes.func,
};