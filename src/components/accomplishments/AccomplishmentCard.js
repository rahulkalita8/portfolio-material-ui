import React from 'react'
import { Fade } from 'react-reveal'

//MaterialUI
import { Card, CardContent, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

//JSS
import theme from './AccomplishmentCardStyle'

const useStyles = makeStyles(theme)

export default function AccomplishmentCard(props) {
    const classes = useStyles()
    return (
        <Fade right duration={1000}>
            <div className={classes.accomplishmentsCardRoot}>
                <Card className={classes.accomplishmentsCard}>
                    <div className={classes.accomplishmentsCardContentRoot}>
                        <CardContent className={classes.accomplishmentsCardContent}>
                            <Typography className={classes.name}>{props.name}</Typography>
                            <div className={classes.metadataInfo}>
                                <Typography className={classes.issuer}>
                                    {props.publisher}
                                </Typography>
                                {props.publisher && (
                                    <FiberManualRecordIcon className={classes.separatorDot} />
                                )}
                                <Typography className={classes.issuer}>{props.issuer}</Typography>
                                {props.issuer && (
                                    <FiberManualRecordIcon className={classes.separatorDot} />
                                )}
                                <Typography className={classes.date}>{props.date}</Typography>
                            </div>
                            <Typography className={classes.details}>{props.details}</Typography>
                            {Object.entries(props.url).map(([name, link], index) => {
                                return (
                                    <Button
                                        color="primary"
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.accomplishmentButton}
                                        key={name + '-' + index}
                                    >
                                        {name}
                                    </Button>
                                )
                            })}
                        </CardContent>
                    </div>
                </Card>
            </div>
        </Fade>
    )
}
