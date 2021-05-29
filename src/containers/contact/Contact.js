import React from 'react'

//MaterialUI
import { makeStyles } from '@material-ui/core'
import { EmailRounded } from '@material-ui/icons'

//Local Component
import { SocialMedia } from '../socialMedia/SocialMedia'
import { ContactDetails } from '../../profileDetails'

//JSS
import theme from './ContactStyle'

const useStyles = makeStyles(theme)

export default function Contact() {
    const classes = useStyles()

    return (
        <div className={classes.contactRoot} id="contact">
            <div>
                <SocialMedia style={{ margin: '0' }} />
            </div>
            <div className={classes.footer}>
                Rahul Kalita @ 2021
                <a href={'mailto:' + ContactDetails.email} target="_top">
                    <EmailRounded style={{ color: 'white', margin: '0 1rem' }} />
                </a>
            </div>
        </div>
    )
}
