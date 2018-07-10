import React, { Component }from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import inlineLogo from '../images/inline_logo.png'


const styles = {
  logo: {
    width: 200,
  }
}

class Logo extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.imageContainer}>
        <img className = { classes.logo } src = {inlineLogo} alt='Truth In Motion logo' />
      </div>
    );
  }
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Logo);
