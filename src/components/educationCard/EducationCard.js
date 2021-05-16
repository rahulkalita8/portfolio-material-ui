import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import theme from './EducationCardStyle'

const useStyles = makeStyles(theme)

export default function EducationCard(props) {
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
                    <Typography>{props.degree}</Typography>
                    <Typography>{props.years}</Typography>
                    <Typography>{props.score}</Typography>
                </CardContent>
            </div>
        </Card>
    )
}
