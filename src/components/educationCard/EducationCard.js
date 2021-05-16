import {
    Card,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import React from 'react'
import theme from './EducationCardStyle'

const useStyles = makeStyles(theme)

export default function EducationCard(props) {
    const classes = useStyles()
    return (
        <div className={classes.educationCardRoot}>
            <Card className={classes.educationCard}>
                <div className={classes.educationCardMediaRoot}>
                    <CardMedia
                        image={props.imageUrl}
                        title={props.imageTitle}
                        className={classes.educationCardMedia}
                    ></CardMedia>
                </div>
                <div className={classes.educationCardContentRoot}>
                    <CardContent className={classes.educationCardContent}>
                        <Typography className={classes.schoolName}>
                            {props.name}
                        </Typography>
                        <Typography className={classes.schooldegree}>
                            {props.degree}
                        </Typography>
                        <Typography className={classes.schoolyears}>
                            {props.years}
                        </Typography>
                        <Typography className={classes.grade}>
                            {props.grade}
                        </Typography>
                        {props.details && (
                            <List>
                                {props.details.map((m, index) => {
                                    return (
                                        <ListItem
                                            key={
                                                props.schoolName +
                                                '-list-' +
                                                index
                                            }
                                            className={classes.listItems}
                                        >
                                            <ListItemIcon
                                                className={classes.listIcon}
                                            >
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <Typography
                                                className={classes.details}
                                            >
                                                {m}
                                            </Typography>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        )}
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
