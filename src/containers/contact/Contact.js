import React from 'react'

import theme from './ContactStyle'
import { SocialMedia } from '../socialMedia/SocialMedia'
import { ContactDetails } from '../../profileDetails'
import { makeStyles } from '@material-ui/core'
import { EmailRounded } from '@material-ui/icons'

const useStyles = makeStyles(theme)

export default function Contact() {
    const classes = useStyles()

    return (
        <div className={classes.contactRoot}>
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
