import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import PropTypes from 'prop-types'
import Header from './Header'
import { styles } from './jss_styles/HomePage_styles'
import CoachingBlurbs from './CoachingBlurbs'

<<<<<<< HEAD
=======
const styles = theme => ({
  homeContainer: {
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  preTitle: {
    fontSize: 80,
    color: '#fff',
    position: 'fixed',
    top: '20%',
    left: '20%',
    [theme.breakpoints.down('lg')]: {
      fontSize: 64,
      left: '25%'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
      left: '17.5%'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      left: '10%',
      top: '30%'
    }
  },
  titleContainer: {
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'fixed',
    top: '40%',
    [theme.breakpoints.down('xs')]: {
      top: '45%',
    }

  },
  mainTitle: {
    fontSize: 88,
    color: '#EE5A32',
    fontStyle: 'italic',
    [theme.breakpoints.down('lg')]: {
      fontSize: 72,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
    }
  },
  attribution: {
    fontSize: 24,
    color: '#fff',
    marginTop:-30,
    fontWeight: 100,
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      marginTop: -20
    }
  },
  button: {
    fontSize: 24,
    color: '#fff',
    borderRadius: 10,
    background: '#2C73A1',
    position: 'fixed',
    top: "80%",
    [theme.breakpoints.down('md')]: {
      fontSize: 20, 
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
    menu: {
      position: 'fixed',
      top: '20px',
      right: 20
      }
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
})
>>>>>>> 4b3a36cb542606f1b13beffa1d9ceb36fd1c9b79


class HomePage extends Component{
  constructor() {
    super();
    this.state = {
      homepage: []
    }
  }

  componentDidMount() {
    let dataURL = "http://truth-in-motion.local/wp-json/wp/v2/pages/?slug=home";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          homepage: res
        })
      })
  }

  render() {
    const { classes } = this.props
    let homepageContent = this.state.homepage.map((content, index) => {
      return (
        <div key = {index}>
        <h1 className={classes.title1} >{content.acf.title_1}</h1>
        <h1 className={classes.title2} >{content.acf.subtitle}</h1>
        <h3 className={classes.attribution}> {content.acf.content}</h3>
        </div>
      )
    })
      
    return(
<<<<<<< HEAD
      <div>
        <div className = {classes.homeContainer} >
          <Header className = {classes.header}/>
          {homepageContent}
          <div className= { classes.buttonContainer }>
            <Button variant='raised' className={ classes.button }>Click Here For More Info</Button>
          </div>
=======
      <div className = {classes.homeContainer} >
        <Logo/>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <NavButton/>
            ) : (
              <NavMenu/>
            )
          }
        </Media>
        
        <h2 className={classes.preTitle} >Racing is ...</h2>
        <div className = { classes.titleContainer }>
          <h1 className={classes.mainTitle} >Truth In Motion</h1>
          <h3 className={classes.attribution}> - Mark Allen, 6x Ironman Champion</h3>
        </div>
        <div className= { classes.buttonContainer }>
          <Button variant='raised' className={ classes.button }>Click Here For More Info</Button>
>>>>>>> 4b3a36cb542606f1b13beffa1d9ceb36fd1c9b79
        </div>
        <CoachingBlurbs/>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomePage);

// #2C73A1
// #EE5A32

