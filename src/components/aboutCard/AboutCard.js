import React from 'react'

//Material-UI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//Local Components
import { SocialMedia } from '../../containers/socialMedia/SocialMedia'

//JSS
import theme from './AboutCardStyles'

const useStyles = makeStyles(theme)

export default function AboutCard(props) {
    const classes = useStyles()

    return (
        <div className={classes.aboutMain} id="about">
            <div className={classes.aboutDetails}>
                <Typography align="center" className={classes.typographyH1}>
                    Rahul Kalita
                </Typography>
                <Typography align="center" className={classes.typographyBody1}>
                    Developer | Wannabe Full Stack | Casual Chess Player
                </Typography>
                <SocialMedia />
            </div>
        </div>
    )
}
