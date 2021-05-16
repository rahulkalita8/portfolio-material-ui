import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import theme from './ExperienceCardStyle'
import Fade from 'react-reveal/Fade'
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
                <div className={classes.experienceCardContentRoot}>
                    {props.allDetails && (
                        <Timeline>
                            {props.allDetails.map((m, index) => {
                                return (
                                    <Fade right duration={1000}>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot color="primary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Card
                                                    key={
                                                        props.name +
                                                        '-experience-timeline-card-' +
                                                        index
                                                    }
                                                    className={
                                                        classes.experienceCard
                                                    }
                                                >
                                                    <CardContent
                                                        className={
                                                            classes.experienceCardContent
                                                        }
                                                    >
                                                        <Typography
                                                            className={
                                                                classes.role
                                                            }
                                                        >
                                                            {m.role}
                                                        </Typography>
                                                        <Typography
                                                            className={
                                                                classes.timeline
                                                            }
                                                        >
                                                            {m.timeline}
                                                        </Typography>
                                                        <Typography
                                                            className={
                                                                classes.details
                                                            }
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
