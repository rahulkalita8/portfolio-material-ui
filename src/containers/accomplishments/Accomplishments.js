import React, { useState } from 'react'
import { Slide } from 'react-reveal'

//MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//Local Component
import { AccomplishmentsDetails } from '../../profileDetails'
import AccomplishmentCard from '../../components/accomplishments/AccomplishmentCard'

//JSS
import theme from './AccomplishmentsStyle'

const useStyles = makeStyles(theme)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getAllName(array) {
    let permittedValues = array.map(function (value, index) {
        if (index == array.length - 1) return value.name
        return value.name + '\t \u25CF \t'
    })
    return permittedValues
}

export default function Accomplishments() {
    const classes = useStyles()

    const [expanded, setExpanded] = useState(false)

    return (
        <div id="accomplishments">
            {AccomplishmentsDetails.enable && (
                <div className={classes.accomplishmentsRoot}>
                    <Typography className={classes.accomplishmentsRootLabel}>
                        Accomplishments
                    </Typography>
                    {AccomplishmentsDetails.accomplishments &&
                        Object.entries(AccomplishmentsDetails.accomplishments).map(
                            ([key, value], index) => {
                                return (
                                    <div key={key + '-' + index}>
                                        {value && value.length > 0 && (
                                            <Accordion
                                                className={classes.accordion}
                                                onChange={(e, expanded) => {
                                                    if (expanded) {
                                                        setExpanded(true)
                                                    } else {
                                                        setExpanded(false)
                                                    }
                                                }}
                                                key={key + '-' + index}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    key={key + '-' + index}
                                                >
                                                    <div
                                                        className={classes.accordionSummary}
                                                        key={key + '-' + index}
                                                    >
                                                        <Typography
                                                            className={classes.heading}
                                                            key={key + '-' + index + '-head'}
                                                        >
                                                            {capitalizeFirstLetter(key)}
                                                        </Typography>
                                                        {value && !expanded && (
                                                            <Typography
                                                                key={key + '-' + index + '-sub'}
                                                            >
                                                                {getAllName(
                                                                    AccomplishmentsDetails
                                                                        .accomplishments[key]
                                                                )}
                                                            </Typography>
                                                        )}
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails
                                                    key={key + '-' + index + '-details'}
                                                >
                                                    <div
                                                        className={classes.accomplishmentsLists}
                                                        key={key + '-' + index + '-lists'}
                                                    >
                                                        {value &&
                                                            value.map((v, valueIndex) => {
                                                                return (
                                                                    <div
                                                                        className={
                                                                            classes.accomplishmentsListItem
                                                                        }
                                                                        key={key + '-' + valueIndex}
                                                                    >
                                                                        <AccomplishmentCard
                                                                            key={
                                                                                key +
                                                                                '-' +
                                                                                valueIndex
                                                                            }
                                                                            name={v.name}
                                                                            date={v.date}
                                                                            url={v.url}
                                                                            details={v.details}
                                                                            publisher={v.publisher}
                                                                            issuer={v.issuer}
                                                                            status={v.status}
                                                                        />
                                                                        <Slide
                                                                            left
                                                                            duration={2000}
                                                                            key={
                                                                                key +
                                                                                '-' +
                                                                                valueIndex +
                                                                                '-slide'
                                                                            }
                                                                        >
                                                                            <div
                                                                                className={
                                                                                    classes.projectBorder
                                                                                }
                                                                                key={
                                                                                    key +
                                                                                    '-' +
                                                                                    valueIndex +
                                                                                    '-slide'
                                                                                }
                                                                            ></div>
                                                                        </Slide>
                                                                    </div>
                                                                )
                                                            })}
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                        )}
                                    </div>
                                )
                            }
                        )}
                </div>
            )}
        </div>
    )
}
