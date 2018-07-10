import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import PropTypes from 'prop-types'
import Header from './Header'
import CoachingLevels from './Coaching_Levels'


const styles = theme => ({
  coachingContainer: {
    height: '100vh',
    backgroundImage: 'url("http://truth-in-motion.local/wp-content/uploads/2018/07/shutterstock_1009030741.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%'
  },
})


class Coaching extends Component{
  componentDidMount() {
    let dataURL = "http://truth-in-motion.local/wp-json/wp/v2/pages/33";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pages: res
        })
      })
  }

  render() {
    const { classes } = this.props
    return(
      <div>
        <div className = {classes.coachingContainer} >
          <Header className = {classes.header}/>
        </div>
         <CoachingLevels/>
      </div>
    )
  }
}

Coaching.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Coaching);

// #2C73A1
// #EE5A32