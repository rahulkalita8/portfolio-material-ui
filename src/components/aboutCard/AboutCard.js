import React from 'react'

//Material-UI
import { Button, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//Local Components
import { SocialMedia } from '../../containers/socialMedia/SocialMedia'
import { AboutDetails } from '../../profileDetails'

//JSS
import theme from './AboutCardStyles'

const useStyles = makeStyles(theme)

export default function AboutCard(props) {
    const classes = useStyles()

    return (
        <div className={classes.aboutMain} id="about">
            <div className={classes.aboutDetails}>
                <Typography className={classes.aboutDetailsPara}>Hi there, I am</Typography>
                <Typography className={classes.name}>{AboutDetails.name}</Typography>
                <Typography className={classes.aboutDetailsPara}>{AboutDetails.about}</Typography>
                <SocialMedia />
                <Link
                    href={AboutDetails.resumeURL}
                    underline="none"
                    target="_blank"
                    className={classes.resumeBtn}
                >
                    Resume
                </Link>
            </div>
        </div>
    )
}
