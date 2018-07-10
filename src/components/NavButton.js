import React, { Component }from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Icon } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const styles = {
  button: {
    position: 'absolute',
    top: 20, 
    right: 50, 
    background: 'none'
  }, 
  icon: {
    color: '#EE5A32',
    fontSize: 36
  },
  menuItem: {
    textDecoration: 'none',
    
  }
}

class NavButton extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          variant = 'fab'
          className = {classes.button}
        >
          <Icon className={classes.icon}>menu</Icon>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to = '/'  className = {classes.menuItem}>
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to = '/coaching'  className = {classes.menuItem}>
            <MenuItem onClick={this.handleClose}>Coaching</MenuItem>
          </Link>
          <Link to = ''  className = {classes.menuItem}>
            <MenuItem onClick={this.handleClose}>About US</MenuItem>
          </Link>
            <MenuItem onClick={this.handleClose}>Contact</MenuItem>
        </Menu>
      </div>
    );
  }
}

NavButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavButton);
