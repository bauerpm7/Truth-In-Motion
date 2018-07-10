import React, { Component } from 'react';
import CoachingBlurb from './CoachingBlurb'
import { withStyles } from 'material-ui/styles'


const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  levelContainer: {
    display: 'flex',
    textAlign: 'center',
    width: '90%',
    justifyContent: 'space-around',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
})

class CoachingBlurbs extends Component {
  constructor() {
    super();
    this.state = {
      blurbs: []
    }
  }
componentDidMount() {
    let dataURL = "http://truth-in-motion.local/wp-json/wp/v2/coaching_card";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          blurbs: res
        })
      })
  }
render() {
  const {classes} = this.props
  let blurbs = this.state.blurbs.map((blurb, index) => {
    return(
      <CoachingBlurb
        blurb = {blurb} 
        key = {index}
      />
    )
  })
  
  return (
        <div className = {classes.container}>
            <div className = {classes.blurbContainer}>
              {blurbs}
            </div>
        </div>
      )
    }
}

export default withStyles(styles)(CoachingBlurbs)

