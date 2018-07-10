//Vendor
import React from 'react';

//prop-types
import PropTypes from 'prop-types';

//material-ui
import { withStyles } from 'material-ui/styles';
import NavButton from './NavButton';
import NavMenu from './NavMenu';
import Media from 'react-media';
import Logo from './logo'


/**
 * JSS styles
 */
const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
    padding:20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    zIndex: 99
  },

});

/**
 * Render the Header Component
 * @param {object} classes passes in JSS styles
 */
const Header = (props) => {
  const { classes } = props
  return(
    <div className = {classes.container}>
      <Logo className = {classes.logo}/>
      <Media className = {classes.nav} query="(max-width: 599px)">
          {matches =>
            matches ? (
              <NavButton/>
            ) : (
              <NavMenu/>
            )
          }
        </Media>
    </div>

  )
}



Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
