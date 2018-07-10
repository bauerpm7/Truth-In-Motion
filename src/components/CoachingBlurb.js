import React from 'react'
import { Icon } from 'material-ui';
import { withStyles } from 'material-ui/styles'

const styles = {
	icon: {
		color: '#2C73A1'
	}

}

const CoachingBlurb = (props) => {
	const { classes, blurb } = props
	return (
		<div>
			<Icon className = {classes.icon} >check_circle_outline</Icon>
			<p>{blurb.acf.blurb}</p>
		</div>

	)
}

export default withStyles(styles)(CoachingBlurb)