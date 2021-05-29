import React from 'react'

//MaterialUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//Local Component
import EducationCard from '../../components/educationCard/EducationCard'
import { EducationDetails } from '../../profileDetails'

//JSS
import theme from './EducationStyle'

const useStyles = makeStyles(theme)

export default function Education() {
    const classes = useStyles()

    return (
        <div id="education">
            {EducationDetails.enable && (
                <div className={classes.educationRoot}>
                    <Typography className={classes.educationRootLabel}>Education</Typography>
                    <div className={classes.educationLists}>
                        {EducationDetails.schools.map((school, index) => {
                            return (
                                <EducationCard
                                    key={'education-' + index}
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
