export const styles = theme => ({
  homeContainer: {
    height: '100vh',
    backgroundImage: 'url("http://truth-in-motion.local/wp-content/uploads/2018/07/bwswimmers-1-1024x685.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%'
  },
  title1: {
    fontSize: 88,
    color: '#fff',
    position: 'absolute',
    top: '20%',
    left: '20%',
    [theme.breakpoints.down('lg')]: {
      fontSize: 72,
      left: '25%'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
      left: '17.5%'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 40,
      width: '100%',
      textAlign:'center',
      left: 0,
      top: '30%',
    }
  },
  title2: {
    fontSize: 88,
    color: '#EE5A32',
    position: 'absolute',
    top: '40%',
    width: '100%',
    textAlign:'center',
    fontStyle: 'italic',
    [theme.breakpoints.down('lg')]: {
      fontSize: 72,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
      left:0,
      top: "45%"
    }
  },
  attribution: {
    fontSize: 20,
    color: '#fff',
    position: 'absolute',
    top: '60%',
    left: '45%',
    fontWeight: 200,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  button: {
    fontSize: 24,
    color: '#fff',
    borderRadius: 10,
    background: '#2C73A1',
    position: 'absolute',
    top: "80%",
    [theme.breakpoints.down('md')]: {
      fontSize: 20, 
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  buttonContainer: {
      display: 'flex',
      justifyContent: 'center'
  },
})