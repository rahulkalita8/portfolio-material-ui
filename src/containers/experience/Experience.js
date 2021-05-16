import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Typography } from '@material-ui/core'
import ExperienceCard from '../../components/experienceCard/ExperienceCard'
import { WorkExperienceDetails } from '../../profileDetails'

import theme from './ExperienceStyle'

const useStyles = makeStyles(theme)

export default function Experience() {
    const classes = useStyles()

    return (
        <div className={classes.experienceRoot} id="Experience">
            {WorkExperienceDetails.enable && (
                <div>
                    <Typography className={classes.experienceRootLabel}>
                        Work Experience
                    </Typography>
                    <div className={classes.experienceLists}>
                        {WorkExperienceDetails.experience.map((company) => {
                            return (
                                <ExperienceCard
                                    logo={company.logo}
                                    name={company.name}
                                    allDetails={company.allDetails}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
