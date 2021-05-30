import React from 'react'

//MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core'

//JSS
import theme from './AchievementCardStyle'

const useStyles = makeStyles(theme)

export default function AchievementCard(props) {
    const classes = useStyles()

    return (
        <div className={classes.achievementCardRoot}>
            <Card className={classes.achievementCard}>
                <div className={classes.achievementCardMediaRoot}>
                    <CardMedia
                        image={props.imageUrl}
                        title={props.name}
                        className={classes.achievementCardMedia}
                    ></CardMedia>
                </div>
                <div className={classes.achievementCardContentRoot}>
                    <CardContent className={classes.achievementCardContent}>
                        <Typography className={classes.organization}>
                            {props.organization}
                        </Typography>
                        <Typography className={classes.name}>{props.name}</Typography>
                        <Typography className={classes.date}>{'(' + props.date + ')'}</Typography>
                        <Typography className={classes.details}>{props.details}</Typography>
                    </CardContent>
                    <div>
                        {props.usefulLinks.map((link, index) => {
                            return (
                                <Button
                                    color="primary"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.achievementButton}
                                    key={'achievements-' + index + '-btn'}
                                >
                                    {link.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </Card>
        </div>
    )
}
