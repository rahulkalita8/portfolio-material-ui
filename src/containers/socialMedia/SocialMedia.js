import React from 'react'

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
import { makeStyles } from '@material-ui/styles'
import { SocialMediaDetails } from '../../profileDetails'

const useStyles = makeStyles({
    socialMediaRoot: {
        padding: '5px',
        marginTop: '10px',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    button: {
        color: 'white',
        padding: '0.5rem',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '2rem',
        minWidth: '2rem',
        // maxWidth: '4rem',
        margin: '0.5rem',
        // fontSize: '2rem',
        // lineHeight: '2.6rem',
        // margin: '0 5px',
        // marginBottom: '10px',
        // textAlign: 'center',
        // width: '2.6rem',
        // marginBottom: '10px',
        flexGrow: 1,
        transition: '0.2s ease-in',
    },
})

function getEnabledSocialMedia() {
    let socialMediaDict = {}
    for (let key in SocialMediaDetails) {
        if (SocialMediaDetails[key].enable)
            socialMediaDict[key] = SocialMediaDetails[key]
    }
    return socialMediaDict
}

export function SocialMedia() {
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
