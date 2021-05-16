import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import EducationCard from '../../components/educationCard/EducationCard'
import { EducationDetails } from '../../profileDetails'

import theme from './EducationStyle'

const useStyles = makeStyles(theme)

export default function Education() {
    const classes = useStyles()

    return (
        <div className={classes.educationRoot} id="Education">
            {EducationDetails.enable && (
                <div>
                    <Typography className={classes.educationRootLabel}>
                        Education
                    </Typography>
                    <div className={classes.educationLists}>
                        {EducationDetails.schools.map((school) => {
                            return (
                                <EducationCard
                                    imageUrl={school.imageUrl}
                                    imageTitle={school.imageTitle}
                                    name={school.name}
                                    degree={school.degree}
                                    years={school.years}
                                    grade={school.grade}
                                    details={school.details}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
