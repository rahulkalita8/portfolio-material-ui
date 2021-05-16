import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { SocialMedia } from '../../containers/socialMedia/SocialMedia'
import LottieAnimation from '../../utils/LottieAnimation'
import WorkAnimation from '../../resources/animations/58560-work-from-home-chill.json'
import WorkAnimation1 from '../../resources/animations/laptop-working-light.json'

import theme from './AboutCardStyles'

const useStyles = makeStyles(theme)

export default function AboutCard() {
    const classes = useStyles()

    return (
        <Paper elevation={0} className={classes.main}>
            <div className={classes.main__div}>
                <Typography
                    variant="h2"
                    align="center"
                    className={classes.typographyH1}
                >
                    Rahul Kalita
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    className={classes.typographyBody1}
                >
                    Developer | Wannabe Full Stack | Casual Chess Player
                </Typography>
                <SocialMedia />
            </div>
            <div className={classes.main__animation}>
                <LottieAnimation
                    lottie={WorkAnimation1}
                    width={300}
                    height={300}
                />
            </div>
        </Paper>
    )
}
