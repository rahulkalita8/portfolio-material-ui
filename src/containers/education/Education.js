import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Paper } from '@material-ui/core'
import EducationCard from '../../components/educationCard/EducationCard'
import { EducationDetails } from '../../profileDetails'

const useStyles = makeStyles((theme) => ({}))

export default function Education() {
    const classes = useStyles()

    return (
        <Paper>
            {EducationDetails.enable &&
                EducationDetails.schools.map((school) => {
                    return (
                        <EducationCard
                            imageUrl={school.imageUrl}
                            imageTitle={school.imageTitle}
                            name={school.name}
                            degree={school.degree}
                            years={school.years}
                            score={school.score}
                        />
                    )
                })}
        </Paper>
    )
}
