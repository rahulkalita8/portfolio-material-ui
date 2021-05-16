import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import theme from './ExperienceStyle'

const useStyles = makeStyles(theme)

export default function ExperienceCard(props) {
    const classes = useStyles()
    console.log(props.logo)
    return (
        <Card className={classes.card}>
            <div className={classes.cardMedia}>
                <CardMedia
                    style={{ height: 0, paddingTop: '56%' }}
                    image={props.logo}
                    title={props.name}
                ></CardMedia>
            </div>
            <div>
                <CardContent>
                    <Typography>{props.name}</Typography>
                    <Typography>{props.role}</Typography>
                    <Typography>{props.timeline}</Typography>
                    {props.desc.map((m) => {
                        return <Typography>{m}</Typography>
                    })}
                </CardContent>
            </div>
        </Card>
    )
}
