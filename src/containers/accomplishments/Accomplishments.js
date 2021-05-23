import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import AccomplishmentCard from '../../components/accomplishments/AccomplishmentCard'
import { AccomplishmentsDetails } from '../../profileDetails'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Fade, Slide } from 'react-reveal'

import theme from './AccomplishmentsStyle'

const useStyles = makeStyles(theme)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getAllName(array) {
    let permittedValues = array.map(function (value) {
        return value.name + '\t \u25CF \t'
    })
    return permittedValues
}

export default function Accomplishments() {
    const classes = useStyles()

    const [expanded, setExpanded] = useState(false)

    return (
        <div className={classes.accomplishmentsRoot} id="accomplishments">
            {AccomplishmentsDetails.enable && (
                <div>
                    <Typography className={classes.accomplishmentsRootLabel}>
                        Accomplishments
                    </Typography>
                    {AccomplishmentsDetails.accomplishments &&
                        Object.entries(AccomplishmentsDetails.accomplishments).map(
                            ([key, value]) => {
                                return (
                                    <div>
                                        <Accordion
                                            className={classes.accordion}
                                            onChange={(e, expanded) => {
                                                if (expanded) {
                                                    setExpanded(true)
                                                } else {
                                                    setExpanded(false)
                                                }
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div className={classes.accordionSummary}>
                                                    <Typography className={classes.heading}>
                                                        {capitalizeFirstLetter(key)}
                                                    </Typography>
                                                    {value && !expanded && (
                                                        <Typography>
                                                            {getAllName(
                                                                AccomplishmentsDetails
                                                                    .accomplishments[key]
                                                            )}
                                                        </Typography>
                                                    )}
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className={classes.accomplishmentsLists}>
                                                    {value &&
                                                        value.map((v) => {
                                                            return (
                                                                <div>
                                                                    <AccomplishmentCard
                                                                        name={v.name}
                                                                        date={v.date}
                                                                        url={v.url}
                                                                        details={v.details}
                                                                        publisher={v.publisher}
                                                                        issuer={v.issuer}
                                                                        status={v.status}
                                                                    />
                                                                    <Slide left duration={2000}>
                                                                        <div
                                                                            className={
                                                                                classes.projectBorder
                                                                            }
                                                                        ></div>
                                                                    </Slide>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                )
                            }
                        )}
                </div>
            )}
        </div>
    )
}
