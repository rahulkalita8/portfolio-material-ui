import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    List,
    ListItem,
    ListItemIcon,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import React from 'react'
import theme from './ExperienceCardStyle'

const useStyles = makeStyles(theme)

export default function ExperienceCard(props) {
    const classes = useStyles()
    return (
        <div className={classes.experienceCardRoot}>
            <Card className={classes.experienceCard}>
                <div className={classes.experienceCardMediaRoot}>
                    <CardMedia
                        image={props.logo}
                        title={props.name}
                        className={classes.experienceCardMedia}
                    ></CardMedia>
                </div>
                <div className={classes.experienceCardContentRoot}>
                    <CardContent className={classes.experienceCardContent}>
                        <Typography className={classes.companyName}>
                            {props.name}
                        </Typography>
                        <Typography className={classes.role}>
                            {props.role}
                        </Typography>
                        <Typography className={classes.timeline}>
                            {props.timeline}
                        </Typography>
                        <Typography className={classes.details}>
                            {props.description}
                        </Typography>
                        {/* {props.details && (
                            <div>
                                {props.details.map((m, index) => {
                                    return (
                                        <Typography
                                            key={
                                                props.companyName +
                                                '-list-' +
                                                index
                                            }
                                            className={classes.details}
                                        >
                                            <ArrowRightIcon />
                                            {m}
                                        </Typography>
                                    )
                                })}
                            </div>
                        )} */}
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
