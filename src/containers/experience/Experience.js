import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Paper } from '@material-ui/core'
import ExperienceCard from '../../components/experienceCard/ExperienceCard'
import { WorkExperienceDetails } from '../../profileDetails'

const useStyles = makeStyles((theme) => ({}))

export default function Experience() {
    const classes = useStyles()

    return (
        <Paper>
            {WorkExperienceDetails.enable &&
                WorkExperienceDetails.experience.map((company) => {
                    return (
                        <ExperienceCard
                            logo={company.logo}
                            name={company.name}
                            role={company.role}
                            timeline={company.timeline}
                            desc={company.desc}
                        />
                    )
                })}
        </Paper>
    )
}
