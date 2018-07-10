import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card from 'material-ui/Card'

const styles = theme => ({
	level: {
    width: 280,
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  levelHeader: {
    backgroundColor: '#2C73A1',
    color: '#fff',
    width: '100%', 
    marginTop: -20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    boxSizing: 'border-box'
  },
  description: {
    height: 100,
    lineheight: 16,
    color: '#e9e9e9',
    marginLeft: 10,
    marginRight: 10
  },
  levelContent:{
    padding: 10,
    boxSizing: 'border-box'
  },
  divider: { 
  	borderBottom: '0.5px solid #c9c9c9', 
    paddingBottom: 16
  },
  trapezoid: {
  	backgroundColor: '#EE5A32',
  	borderBottomRightRadius:'100%',
  	borderBottomLeftRadius: '100%',
  	height: 100,
  	width: 340,
  	marginLeft: -40
  }
})

const CoachingLevel = (props) => {
	const { classes, level } = props
	return (
		<Card raised = {true}  className = {classes.level}>
	      <div className = {classes.levelHeader}>
	        <h2> {level.title.rendered} </h2>
	        <div className = {classes.trapezoid}>
	        	<h2 style = {{paddingTop:20 }}> ${level.acf.price} </h2>
	        	<h3 style = {{color: '#e9e9e9', marginTop: -15}} > {level.acf.payment_sched} </h3>
	        </div>
	        <p style = {{margin: 20}} className = {classes.description}> {level.acf.description}</p>
	      </div>
	      <div className = {classes.levelContent}>
	        <p> ${level.acf.price}</p>
	        <p style = {{marginTop: -15}} className = {classes.divider}> {level.acf.payment_sched}</p>
	        <p className = {classes.divider}> {level.acf.tp_account}</p>
	        <p className = {classes.divider}> {level.acf.goal_planning}</p>
	        <p className = {classes.divider}> {level.acf.email_comm}</p>
	        <p className = {classes.divider}> {level.acf.phone_comm}</p>
	        <p> {level.acf.plan_adj}</p>
	      </div>
	     </Card>
	)
}

export default withStyles(styles)(CoachingLevel)

		

	