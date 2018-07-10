import React, { Component } from 'react';
import CoachingLevel from './Coaching_Level'
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

class CoachingLevels extends Component {
  constructor() {
    super();
    this.state = {
      levels: []
    }
  }
componentDidMount() {
    let dataURL = "http://truth-in-motion.local/wp-json/wp/v2/level";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          levels: res
        })
      })
  }
render() {
  const {classes} = this.props
  let levels = this.state.levels.map((level,index) => {
    return(
      <CoachingLevel 
        level = {level} 
        key = {index}
      />
    )
  })
  
  return (
        <div className = {classes.container}>
          <h1>Coaching Levels</h1>
            <div className = {classes.levelContainer}>
              {levels}
            </div>
        </div>
      )
    }
}

export default withStyles(styles)(CoachingLevels)