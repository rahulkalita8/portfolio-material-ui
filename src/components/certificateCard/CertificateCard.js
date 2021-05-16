import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import theme from './CertificateCardStyle'

const useStyles = makeStyles(theme)

export default function CertificateCard(props) {
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
                    <Typography>{props.organization}</Typography>
                    <Typography>{props.issueDate}</Typography>
                    <Typography>{props.details}</Typography>
                    {props.url && (
                        <Button
                            color="primary"
                            href={props.url}
                            blank="_target"
                            rel="noopener noreferrer"
                        >
                            Certificate
                        </Button>
                    )}
                </CardContent>
            </div>
        </Card>
    )
}
