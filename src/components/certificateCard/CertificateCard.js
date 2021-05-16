import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import theme from './CertificateCardStyle'

const useStyles = makeStyles(theme)

export default function CertificateCard(props) {
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
                        <Typography className={classes.companyName}>
                            {props.name}
                        </Typography>
                        <Typography className={classes.organization}>
                            {props.organization}
                        </Typography>
                        <Typography className={classes.date}>
                            {props.date}
                        </Typography>
                        <Typography className={classes.details}>
                            {props.details}
                        </Typography>
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
        </div>
    )
}
