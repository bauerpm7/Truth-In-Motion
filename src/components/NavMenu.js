import React, { Component }from 'react';
import { Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const styles = {
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    width:'100%',
    paddingRight: 35,
    paddingTop: 10
  },
  menuItem: {
    padding: 12,
    color: '#EE5A32',
    fontSize: 18,
  },
  link: {
    textDecoration: 'none'
  }
}

class NavMenu extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.menu}>
        <Link to='/'
          className={ classes.link }>
          <Typography
          className = {classes.menuItem}
          >Home</Typography>
        </Link>
        <Link to='/coaching'
          className={ classes.link } >
          <Typography
          className = {classes.menuItem}
          >Coaching</Typography>
        </Link>
        <Link to='/about'
          className={ classes.link } >
          <Typography
          className = {classes.menuItem}
          >About Us</Typography>
        </Link>
        <Link to='/contact'
          className={ classes.link } >
          <Typography
          className = {classes.menuItem}
          >Contact</Typography>
        </Link>
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavMenu);
