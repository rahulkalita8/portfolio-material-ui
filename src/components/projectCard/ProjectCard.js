import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import theme from './projectCardStyle'

const useStyles = makeStyles(theme)

export default function ProjectCard(props) {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <div className={classes.cardMedia}>
                <CardMedia
                    style={{ height: 0, paddingTop: '56%' }}
                    image={props.imageUrl}
                    title={props.name}
                ></CardMedia>
            </div>
            <div>
                <CardContent>
                    <Typography>{props.name}</Typography>
                    <Typography>{props.date}</Typography>
                    <Typography>{props.details}</Typography>
                    {props.url && (
                        <Button
                            color="primary"
                            href={props.url}
                            blank="_target"
                            rel="noopener noreferrer"
                        >
                            Project
                        </Button>
                    )}
                </CardContent>
            </div>
        </Card>
    )
}
