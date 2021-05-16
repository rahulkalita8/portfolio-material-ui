import React from 'react'
import { makeStyles } from '@material-ui/styles'
import theme from './AchievementCardStyle'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@material-ui/core'

const useStyles = makeStyles(theme)

export default function AchievementCard(props) {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <div className={classes.cardMedia}>
                <CardMedia
                    style={{ height: 0, paddingTop: '56%' }}
                    image={props.imageUrl}
                    title={props.imageTitle}
                ></CardMedia>
            </div>
            <div>
                <CardContent>
                    <Typography>{props.name}</Typography>
                    <Typography>{props.type}</Typography>
                    <Typography>{props.details}</Typography>
                    <Typography>{props.date}</Typography>
                    {props.usefulLinks.map((link) => {
                        return (
                            <Button
                                color="primary"
                                href={link.url}
                                blank="_target"
                                rel="noopener noreferrer"
                            >
                                {link.name}
                            </Button>
                        )
                    })}
                </CardContent>
            </div>
        </Card>
    )
}
