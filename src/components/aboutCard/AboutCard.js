import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SocialMedia } from '../../containers/socialMedia/SocialMedia'
import LottieAnimation from '../../utils/LottieAnimation'
import WorkAnimation from '../../resources/animations/laptop-working-light.json'

import theme from './AboutCardStyles'

const useStyles = makeStyles(theme)

export default function AboutCard(props) {
    const classes = useStyles()

    return (
        <div className={classes.aboutMain} id="About">
            <div className={classes.aboutDetails}>
                <Typography align="center" className={classes.typographyH1}>
                    Rahul Kalita
                </Typography>
                <Typography align="center" className={classes.typographyBody1}>
                    Developer | Wannabe Full Stack | Casual Chess Player
                </Typography>
                <SocialMedia />
            </div>
            {/* <div className={classes.main__animation}>
                <LottieAnimation
                    lottie={WorkAnimation}
                    width={300}
                    height={300}
                />
            </div> */}
        </div>
    )
}
