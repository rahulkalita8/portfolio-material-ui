import React from 'react'
import Fade from 'react-reveal/Fade'

//MaterialUI
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@material-ui/lab'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

//JSS
import theme from './ExperienceCardStyle'

const useStyles = makeStyles(theme)

const Theme = createMuiTheme({
    overrides: {
        MuiTimelineItem: {
            missingOppositeContent: {
                '&:before': {
                    display: 'none',
                },
            },
        },
    },
})

export default function ExperienceCard(props) {
    const classes = useStyles()

    return (
        <ThemeProvider theme={Theme}>
            <div className={classes.experienceCardRoot}>
                <div className={classes.experienceCardMediaRoot}>
                    <CardMedia
                        image={props.logo}
                        title={props.name}
                        className={classes.experienceCardMedia}
                    ></CardMedia>
                </div>
                <Typography className={classes.companyName}>{props.name}</Typography>
                <div className={classes.experienceCardContentRoot}>
                    {props.allDetails && (
                        <Timeline>
                            {props.allDetails.map((m, index) => {
                                return (
                                    <Fade right duration={1000} key={props.name + index}>
                                        <TimelineItem key={props.name + index}>
                                            <TimelineSeparator key={props.name + index}>
                                                <TimelineDot
                                                    key={props.name + index}
                                                    color="primary"
                                                />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Card
                                                    key={
                                                        props.name +
                                                        '-experience-timeline-card-' +
                                                        index
                                                    }
                                                    className={classes.experienceCard}
                                                >
                                                    <CardContent
                                                        className={classes.experienceCardContent}
                                                        key={props.name + index}
                                                    >
                                                        <Typography
                                                            className={classes.role}
                                                            key={props.name + index + 'role'}
                                                        >
                                                            {m.role}
                                                        </Typography>
                                                        <Typography
                                                            className={classes.timeline}
                                                            key={props.name + index + 'timeline'}
                                                        >
                                                            {m.timeline}
                                                        </Typography>
                                                        <Typography
                                                            className={classes.details}
                                                            key={props.name + index + 'desc'}
                                                        >
                                                            {m.description}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Fade>
                                )
                            })}
                        </Timeline>
                    )}
                </div>
            </div>
        </ThemeProvider>
    )
}
