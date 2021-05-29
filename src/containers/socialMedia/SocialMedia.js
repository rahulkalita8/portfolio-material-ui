import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGoogle,
    faFacebook,
    faLinkedinIn,
    faGithub,
    faMediumM,
    faInstagram,
    faTwitter,
    faTwitch,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

import { makeStyles } from '@material-ui/core/styles'

//Local Component
import { SocialMediaDetails } from '../../profileDetails'

//JSS
import theme from './SocialMediaStyle'

const useStyles = makeStyles(theme)

function getEnabledSocialMedia() {
    let socialMediaDict = {}
    for (let key in SocialMediaDetails) {
        if (SocialMediaDetails[key].enable) socialMediaDict[key] = SocialMediaDetails[key]
    }
    return socialMediaDict
}

export function SocialMedia(props) {
    const classes = useStyles()

    const socialMediaDict = getEnabledSocialMedia()
    const socialMediaIcons = {
        facebook: (
            <FontAwesomeIcon
                icon={faFacebook}
                className={classes.button}
                style={{ backgroundColor: '#3b5998' }}
            ></FontAwesomeIcon>
        ),
        linkedIn: (
            <FontAwesomeIcon
                icon={faLinkedinIn}
                className={classes.button}
                target="_blank"
                style={{ backgroundColor: '#0e76a8' }}
            ></FontAwesomeIcon>
        ),
        github: (
            <FontAwesomeIcon
                icon={faGithub}
                className={classes.button}
                target="_blank"
                style={{ backgroundColor: '#333' }}
            ></FontAwesomeIcon>
        ),
        instagram: (
            <FontAwesomeIcon
                icon={faInstagram}
                className={classes.button}
                target="_blank"
                style={{ backgroundColor: '#c13584' }}
            ></FontAwesomeIcon>
        ),
        google: (
            <FontAwesomeIcon
                icon={faGoogle}
                className={classes.button}
                style={{ backgroundColor: '#ea4335' }}
            ></FontAwesomeIcon>
        ),
        twitter: (
            <FontAwesomeIcon
                icon={faTwitter}
                className={classes.button}
                style={{ backgroundColor: '#1da1f2' }}
            ></FontAwesomeIcon>
        ),
        medium: (
            <FontAwesomeIcon
                icon={faMediumM}
                className={classes.button}
                style={{ backgroundColor: '#000' }}
            ></FontAwesomeIcon>
        ),
        stackOverflow: (
            <FontAwesomeIcon
                icon={faStackOverflow}
                className={classes.button}
                style={{ backgroundColor: '#f48024' }}
            ></FontAwesomeIcon>
        ),
        twitch: (
            <FontAwesomeIcon
                icon={faTwitch}
                className={classes.button}
                style={{ backgroundColor: '#772ce8' }}
            ></FontAwesomeIcon>
        ),
    }

    return (
        <div className={classes.socialMediaRoot}>
            {Object.entries(socialMediaDict).map(([key, value]) => {
                return (
                    <a
                        href={value.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={key + '_key'}
                    >
                        {socialMediaIcons[key]}
                    </a>
                )
            })}
        </div>
    )
}
